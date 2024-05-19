// Importing necessary libraries and components
import { FC } from "react";

import { GameStatus, TUser } from "./lib/types/types";

import Success from "./Success";

import { SkillLevel } from "./lib/types/types";

// Type definition for the props of EndGame component
type EndQuizProps = {
  user: TUser;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
  setUser: React.Dispatch<React.SetStateAction<TUser>>;
};

// EndGame component
const EndGame: FC<EndQuizProps> = ({ user, setGameStatus, setUser }) => {
  // Handler for setting the game status back to Quiz and resetting the single game points
  function handleSetToQuiz() {
    setGameStatus(GameStatus.Quiz);
    setUser((user) => ({ ...user, singleGamePoints: 0 }));
  }

  // Determine the skill level based on the number of correct answers
  let skillLevel;
  if (user.singleGamePoints <= 3) {
    skillLevel = SkillLevel.Base;
  } else if (user.singleGamePoints <= 7) {
    skillLevel = SkillLevel.Intermediate;
  } else if (user.singleGamePoints <= 9) {
    skillLevel = SkillLevel.Expert;
  } else {
    skillLevel = SkillLevel.Master;
  }

  // Rendering the Success or NoSuccess component based on the user's single game points
  return (
    <div className="text-white flex justify-center font-press-start text-base">
      <Success handleSetToQuiz={handleSetToQuiz} skillLevel={skillLevel} />
    </div>
  );
};

export default EndGame;
