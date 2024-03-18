import Aos from "aos";
import { useContext, useEffect } from "react";
import DoorGame from "./components/door-game";
import Header from "./components/header";
import UserSettings from "./components/user-settings";
import { DoorContext } from "./context/door-context";
import { DoorContextI } from "./types/types";
import Results from "./components/results";

function App() {
  const doorContext = useContext(DoorContext) as DoorContextI;

  const { isGameRunning } = doorContext;

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
        <DoorGame />
      ) : (
        <div className=" flex flex-col  items-center gap-3">
          <UserSettings />
          <Header title="Results" subtitle="check leaderboard" />
          <Results />
        </div>
      )}
    </div>
  );
}

export default App;
