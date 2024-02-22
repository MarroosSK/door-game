import { useEffect, useState } from "react";

import ImageBox from "./image-box";
import ImageWrapper from "./image-wrapper";
import { UserSettingsI } from "../types/types";

const DoorGame = ({ userSettings }: { userSettings: UserSettingsI }) => {
  /*
  const [doorSequence, setDoorSequence] = useState<number[]>(
    Array.from({ length: 3 }, () => Math.floor(Math.random() * 3) + 1)
  );
  */

  const [doorSequence] = useState<number[]>([1, 3, 2, 1, 2]);
  const [myDoors, setMyDoors] = useState<number[]>([]);
  const [switcher, setSwitcher] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);
  const [winMsg, setWinMsg] = useState<string>("");
  const [activeDoorIndex, setActiveDoorIndex] = useState<number | null>(null);
  const [activeClickedDoor, setActiveClickedDoor] = useState<number | null>(
    null
  );

  const handleTurn = (doorNumber: number) => {
    setActiveClickedDoor(doorNumber);
    setMyDoors((prevDoor) => [...prevDoor, doorNumber]);
  };

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      if (count < doorSequence.length) {
        const turn = doorSequence[count];
        setActiveDoorIndex(turn);
        count++;
      } else {
        setSwitcher(true);
      }
    }, userSettings.intervalSpeed);

    return () => clearInterval(interval);
  }, [doorSequence, userSettings]);

  useEffect(() => {
    if (myDoors.length === doorSequence.length) {
      const isWinningSequence = myDoors.every(
        (door, index) => door === doorSequence[index]
      );
      if (isWinningSequence) {
        setWin(true);
        setWinMsg("Victory!");
        setSwitcher(false);
      } else {
        setWin(true);
        setWinMsg("Lose! Try again.");
        setSwitcher(false);
      }
    }
  }, [myDoors, doorSequence]);

  return (
    <div className="mt-4 ">
      {!win ? (
        <p className="text-center text-lg text-gray-500 text-muted-foreground">
          Good luck, {userSettings.userName}
        </p>
      ) : (
        <div className="flex flex-col gap-x-2">
          <p className="animate-pulse text-center text-2xl text-gray-500 text-muted-foreground">
            {winMsg}
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
        {!switcher ? (
          <>
            <ImageWrapper>
              <ImageBox position={1} activeDoorIndex={activeDoorIndex} />
            </ImageWrapper>
            <ImageWrapper>
              <ImageBox position={2} activeDoorIndex={activeDoorIndex} />
            </ImageWrapper>
            <ImageWrapper>
              <ImageBox position={3} activeDoorIndex={activeDoorIndex} />
            </ImageWrapper>
          </>
        ) : (
          <>
            <ImageWrapper
              onClick={() => handleTurn(1)}
              className="cursor-pointer"
            >
              <ImageBox position={1} activeDoorIndex={activeClickedDoor} />
            </ImageWrapper>
            <ImageWrapper
              onClick={() => handleTurn(2)}
              className="cursor-pointer"
            >
              <ImageBox position={2} activeDoorIndex={activeClickedDoor} />
            </ImageWrapper>
            <ImageWrapper
              onClick={() => handleTurn(3)}
              className="cursor-pointer"
            >
              <ImageBox position={3} activeDoorIndex={activeClickedDoor} />
            </ImageWrapper>
          </>
        )}
      </div>
    </div>
  );
};

export default DoorGame;
