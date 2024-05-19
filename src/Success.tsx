// Importing necessary libraries and icons
import { TwitterShareButton } from "react-share";
import { FiTwitter } from "react-icons/fi";
import { SkillLevel } from "./lib/types/types";

// Type definition for the props of Success component
type TSucces = {
  handleSetToQuiz: () => void;
  skillLevel: SkillLevel;
};

// Success component
export default function Success({ handleSetToQuiz, skillLevel }: TSucces) {
  // URL to share
  const shareUrl = "http://your-app-homepage.com";

  // Post title
  const title = `Ho partecipato al quiz su Food(s2I)mpact. Ho ottenuto un livello ${skillLevel} . Vai sul sito ${shareUrl} se vuoi provare anche tu!`;

  // Rendering the Success component
  return (
    <div className="flex flex-col gap-2 content-center justify-center w-full">
      <section className="mt-6">
        <div className="flex flex-col w-full">
          <button onClick={handleSetToQuiz} className="text-[#38ded9]">
            RE-INZIA
          </button>
        </div>
      </section>
      <div className="flex justify-center flex-col w-full gap-6 mt-6">
        <div className="flex justify-center flex-col gap-4 content-center">
          <p>
            Hai ottenuto il livello <span>{skillLevel}</span>
          </p>
          <p>Condividi il tuo risultato su Twitter</p>
        </div>
        <div className="flex justify-center text-[#38ded9]">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <FiTwitter size={32} />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
}
