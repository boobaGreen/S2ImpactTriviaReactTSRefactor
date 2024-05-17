import { useState, useEffect } from "react";
import useDecryptedAnswers from "./useDecryptedAnswers"; // Custom hook for getting decrypted answers
import { GameStatus, TUser } from "../types/types"; // Importing necessary types

// Custom hook to manage quiz state
export const useQuiz = (
  user: TUser,
  setUser: (user: TUser) => void,
  setGameStatus: (status: GameStatus) => void
) => {
  // State for the current quiz
  const [quiz, setQuiz] = useState([]);

  // Get the solutions for the current level
  const solutions = useDecryptedAnswers(user.level);

  // State for the current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // State for showing the popup
  const [forPopUp, setForPopup] = useState<boolean>(false);

  // State for the score key
  const [scoreKey, setScoreKey] = useState(Date.now());

  // Effect to load the quiz for the current level
  useEffect(() => {
    import(`../../quiz/level${user.level}/quiz.ts`)
      .then((module) => {
        setQuiz(module.quiz);
        // Check if the quiz is finished
        if (currentQuestion >= module.quiz.length) {
          // Check if the user has enough points to level up
          if (user.singleGamePoints > 7) {
            let newLevel = user.level + 1;
            if (newLevel > 3) {
              newLevel = 1;
            }
            const newUser = { ...user, level: newLevel };
            setUser(newUser);
          }
          setGameStatus(GameStatus.EndGame);
        }
      })
      .catch((error) =>
        console.error(`Failed to load quiz for level ${user.level}`, error)
      );
  }, [
    user.level,
    currentQuestion,
    user.singleGamePoints,
    setUser,
    setGameStatus,
    user, // Add 'user' to the dependency array
  ]);

  // Handler for confirming an answer
  const handleConfirm = (selectedAnswer: string) => {
    if (selectedAnswer === solutions[currentQuestion]) {
      setForPopup(true);
      const newUser = { ...user, singleGamePoints: user.singleGamePoints + 1 };
      setUser(newUser);
    } else {
      setForPopup(false);
    }
    setScoreKey(Date.now());
    setCurrentQuestion(currentQuestion + 1);
  };

  let question, answers;
  // Get the current question and answers
  if (currentQuestion < quiz.length) {
    ({ question, answers } = quiz[currentQuestion]);
  }

  // Return the state and handlers
  return {
    quiz,
    currentQuestion,
    forPopUp,
    scoreKey,
    handleConfirm,
    question,
    answers,
  };
};
