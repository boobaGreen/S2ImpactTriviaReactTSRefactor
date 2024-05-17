import React from "react";
import QuizQuestion from "./QuizQuestion";
import ScorePopup from "./ScorePopup";
import { useQuiz } from "./lib/hooks/useQuiz"; // Import the custom hook
import { GameStatus, TUser } from "./lib/types/types";

type TQuizProps = {
  user: TUser;
  setUser: React.Dispatch<React.SetStateAction<TUser>>;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
};

export const Quiz: React.FC<TQuizProps> = ({
  user,
  setUser,
  setGameStatus,
}) => {
  const {
    quiz,
    currentQuestion,
    forPopUp,
    scoreKey,
    handleConfirm,
    question,
    answers,
  } = useQuiz(user, setUser, setGameStatus); // Use the custom hook

  return (
    <main className="flex flex-col h-full">
      {question && answers && (
        <QuizQuestion
          question={question}
          answers={answers}
          questionNumber={currentQuestion + 1}
          totalQuestions={quiz.length}
          onConfirm={handleConfirm}
        />
      )}
      {currentQuestion > 0 ? (
        <ScorePopup
          key={scoreKey}
          forPopUp={forPopUp}
          color={forPopUp ? "white" : "#454444"}
        />
      ) : null}
    </main>
  );
};
