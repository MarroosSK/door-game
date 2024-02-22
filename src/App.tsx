import { useEffect, useState } from "react";
import DoorGame from "./components/door-game";
import UserSettings from "./components/user-settings";
import Header from "./components/header";
import { UserSettingsI } from "./types/types";
import Aos from "aos";

function App() {
  const [userSettings, setUserSettings] = useState<UserSettingsI>({
    userName: "",
    intervalSpeed: 1000,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isGameRunning, setIsGameRunning] = useState(false);

  const handlePlay = () => {
    if (userSettings.userName.length === 0) {
      setErrorMessage("Enter at least 1 character as username");
      return;
    } else {
      setIsGameRunning(true);
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center h-screen  gap-y-5"
      data-aos="fade-zoom-in"
      data-aos-delay="50"
      data-aos-duration="1500"
    >
      <Header title="Door Game" subtitle="get through the door" />
      {isGameRunning ? (
        <DoorGame userSettings={userSettings} />
      ) : (
        <UserSettings
          userSettings={userSettings}
          setUserSettings={setUserSettings}
          onPlay={handlePlay}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
}

export default App;
