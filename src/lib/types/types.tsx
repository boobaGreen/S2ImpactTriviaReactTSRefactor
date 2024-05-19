// GameStatus enum: This enum represents the different states that the game can be in.
export enum GameStatus {
  Quiz = "quiz", // The game is in the quiz state
  EndGame = "endGame", // The game is in the end game state
  Cover = "cover", // The game is in the cover state
}

// TUser type: This type represents a user in the game.
export type TUser = {
  name: string; // The name of the user
  singleGamePoints: number; // The points the user has scored in a single game
};

// Enum for skill levels
export enum SkillLevel {
  Base = "Base",
  Intermediate = "Intermedio",
  Expert = "Esperto",
  Master = "Maestro",
}

export type TQuiz = { question: string; answers: string[] };
