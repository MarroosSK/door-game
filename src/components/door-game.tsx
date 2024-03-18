import { useCallback, useContext, useEffect } from "react";

import ImageBox from "./image-box";
import ImageWrapper from "./image-wrapper";
// import { UserSettingsI } from "../types/types";
import { DoorContext } from "../context/door-context";

const DoorGame = () => {
  const doorContext = useContext(DoorContext);

  const handleTurn = useCallback(
    (doorNumber: number) => {
      doorContext?.setActiveClickedDoor(doorNumber);
      doorContext?.setMyDoors((prevDoor) => [...prevDoor, doorNumber]);
    },
    [doorContext?.setActiveClickedDoor]
  );

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      if (doorContext && doorContext?.doorSequence.length > count) {
        const turn = doorContext?.doorSequence[count];
        doorContext?.setActiveDoorIndex(turn);
        count++;
      } else {
        doorContext?.setSwitcher(true);
      }
    }, doorContext?.userSettings.intervalSpeed);

    return () => clearInterval(interval);
  }, [doorContext?.doorSequence, doorContext?.userSettings]);

  useEffect(() => {
    if (doorContext?.myDoors.length === doorContext?.doorSequence.length) {
      const isWinningSequence = doorContext?.myDoors.every(
        (door, index) => door === doorContext?.doorSequence[index]
      );
      if (isWinningSequence) {
        doorContext?.setWin(true);
        doorContext?.setWinMsg("Victory!");
        doorContext?.setSwitcher(false);
        doorContext?.setResultList((prevVal) => [
          ...prevVal,
          {
            user: doorContext.userSettings.userName,
            result: "Win",
          },
        ]);
      } else {
        doorContext?.setWin(true);
        doorContext?.setWinMsg("Lose!");
        doorContext?.setSwitcher(false);
        doorContext?.setResultList((prevVal) => [
          ...prevVal,
          {
            user: doorContext.userSettings.userName,
            result: "Lose",
          },
        ]);
      }
    }
  }, [doorContext?.myDoors, doorContext?.doorSequence]);

  return (
    <div className="mt-4 ">
      {!doorContext?.win ? (
        <p className="text-center text-lg text-gray-500 text-muted-foreground">
          Good luck, {doorContext?.userSettings.userName}
        </p>
      ) : (
        <div className="flex flex-col gap-x-2">
          <p className="animate-pulse text-center text-2xl text-gray-500 text-muted-foreground">
            {doorContext?.winMsg}
          </p>
          <button
            className="m-3 h-8 p-y-3 rounded-lg text-white bg-indigo-500 hover:bg-indigo-700"
            onClick={() => window.location.reload()}
          >
            restart
          </button>
        </div>
      )}
      <div className="flex items-center gap-3">
        {!doorContext?.switcher ? (
          <>
            <ImageWrapper>
              <ImageBox
                position={1}
                activeDoorIndex={doorContext?.activeDoorIndex}
              />
            </ImageWrapper>
            <ImageWrapper>
              <ImageBox
                position={2}
                activeDoorIndex={doorContext?.activeDoorIndex}
              />
            </ImageWrapper>
            <ImageWrapper>
              <ImageBox
                position={3}
                activeDoorIndex={doorContext?.activeDoorIndex}
              />
            </ImageWrapper>
          </>
        ) : (
          <>
            <ImageWrapper
              onClick={() => handleTurn(1)}
              className="cursor-pointer"
            >
              <ImageBox
                position={1}
                activeDoorIndex={doorContext?.activeClickedDoor}
              />
            </ImageWrapper>
            <ImageWrapper
              onClick={() => handleTurn(2)}
              className="cursor-pointer"
            >
              <ImageBox
                position={2}
                activeDoorIndex={doorContext?.activeClickedDoor}
              />
            </ImageWrapper>
            <ImageWrapper
              onClick={() => handleTurn(3)}
              className="cursor-pointer"
            >
              <ImageBox
                position={3}
                activeDoorIndex={doorContext?.activeClickedDoor}
              />
            </ImageWrapper>
          </>
        )}
      </div>
    </div>
  );
};

export default DoorGame;
