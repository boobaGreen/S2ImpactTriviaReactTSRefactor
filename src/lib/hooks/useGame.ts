import { useState, useEffect, SetStateAction } from "react";
import { useLocalStorage } from "usehooks-ts";
import { GameStatus, TUser } from "../types/types"; // Importing necessary types

// Custom hook to manage game state
export const useGame = () => {
  // State for the current game status
  const [gameStatus, setGameStatus] = useState(GameStatus.Quiz);

  // State for the current user, using local storage to persist data
  const [user, setUser, removeUser] = useLocalStorage<TUser>(
    "user",
    {
      name: "",
      singleGamePoints: 0,
    } || null
  );

  // State for the current input value
  const [inputValue, setInputValue] = useState("");

  // State for showing the confirmation modal
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // Handler for input change events
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = () => {
    setUser({ name: inputValue, singleGamePoints: 0 });
    setGameStatus(GameStatus.Quiz);
  };

  // Handler for removing the user
  const handleRemoveUser = () => {
    setShowConfirmationModal(true);
  };

  // Handler for confirming user removal
  const confirmRemoveUser = () => {
    removeUser();
    setGameStatus(GameStatus.Cover);
    setShowConfirmationModal(false);
  };

  // Handler for cancelling user removal
  const cancelRemoveUser = () => {
    setShowConfirmationModal(false);
  };

  // Effect to reset the user's single game points when the user changes
  useEffect(() => {
    setUser((prevUser) => ({ ...prevUser, singleGamePoints: 0 }));
  }, [setUser]);

  // Return the state and handlers
  return {
    gameStatus,
    user,
    showConfirmationModal,
    handleInputChange,
    handleSubmit,
    handleRemoveUser,
    confirmRemoveUser,
    cancelRemoveUser,
    setUser,
    setGameStatus,
  };
};
