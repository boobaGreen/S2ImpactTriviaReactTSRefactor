// Importing necessary libraries and components

import Layout from "./Layout";
import { Quiz } from "./Quiz";
import UserInput from "./UserInput";
import EndGame from "./EndGame";
import Modal from "./Modal";
import { useGame } from "./lib/hooks/useGame";

// Main App component
const App = () => {
  const {
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
  } = useGame();

  // Rendering the main layout with conditional rendering based on game status and user dat a
  return (
    <Layout user={user} handleRemoveUser={handleRemoveUser}>
      {user.name === "" ? (
        <UserInput
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      ) : (
        <>
          {gameStatus === "quiz" ? (
            <Quiz user={user} setUser={setUser} setGameStatus={setGameStatus} />
          ) : null}
          {gameStatus === "endGame" ? (
            <EndGame
              user={user}
              setGameStatus={setGameStatus}
              setUser={setUser}
            />
          ) : null}

          {showConfirmationModal ? (
            <Modal
              confirmRemoveUser={confirmRemoveUser}
              cancelRemoveUser={cancelRemoveUser}
            />
          ) : null}
        </>
      )}
    </Layout>
  );
};

export default App;
