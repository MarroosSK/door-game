import { useContext, useEffect, useRef, useState } from "react";
import { DoorContext } from "../context/door-context";

const UserSettings = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const doorContext = useContext(DoorContext);

  const handlePlay = () => {
    if (doorContext?.userSettings.userName.length === 0) {
      setErrorMessage("Enter at least 1 character as username");
      return;
    } else {
      doorContext?.setIsGameRunning(true);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="w-[300px] flex flex-col gap-y-4 mt-8 border bg-white rounded-md p-4">
      {/* Input */}
      <div className="flex flex-col gap-y-2">
        <label
          htmlFor="name"
          className="text-sm text-gray-600 text-muted-foreground text-start"
        >
          Nickname
        </label>
        {errorMessage.length !== 0 && (
          <p className="text-red-500 font-semibold text-sm text-start">
            {errorMessage}
          </p>
        )}
        <input
          className="border border-gray-400 rounded-lg p-2 text-sm"
          ref={inputRef}
          type="text"
          id="name"
          name="name"
          value={doorContext?.userSettings.userName}
          onChange={(e) =>
            doorContext?.setUserSettings((prevState) => ({
              ...prevState,
              userName: e.target.value,
            }))
          }
          required
        />
      </div>
      {/* Range */}
      <div className="flex flex-col gap-y-2">
        <label
          htmlFor="name"
          className="text-sm text-gray-600 text-muted-foreground text-start"
        >
          Speed
        </label>
        <input
          className="rounded-lg overflow-hidden appearance-none  bg-indigo-100 h-3 w-128"
          type="range"
          id="speed"
          name="speed"
          min="200"
          max="5000"
          value={doorContext?.userSettings.intervalSpeed}
          onChange={(e) =>
            doorContext?.setUserSettings((prevState) => ({
              ...prevState,
              intervalSpeed: parseInt(e.target.value),
            }))
          }
        />
        <span className="text-gray-600">
          {doorContext?.userSettings.intervalSpeed}ms
        </span>
      </div>
      <button
        className="w-full h-8 p-y-3 rounded-lg text-white bg-indigo-500 hover:bg-indigo-700"
        onClick={() => handlePlay()}
      >
        Play
      </button>
    </div>
  );
};

export default UserSettings;
