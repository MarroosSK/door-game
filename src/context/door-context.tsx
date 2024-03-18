import React, { createContext, useEffect, useState } from "react";
import { DoorContextI, ResultListI, UserSettingsI } from "../types/types";

export const DoorContext = createContext<DoorContextI | null>(null);

export const DoorContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //settings
  const [userSettings, setUserSettings] = useState<UserSettingsI>({
    userName: "",
    intervalSpeed: 1000,
  });
  const [isGameRunning, setIsGameRunning] = useState<boolean>(false);
  //game
  const [doorSequence] = useState<number[]>([1, 3, 2, 1, 2]);
  const [myDoors, setMyDoors] = useState<number[]>([]);
  const [switcher, setSwitcher] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);
  const [winMsg, setWinMsg] = useState<string>("");
  const [activeDoorIndex, setActiveDoorIndex] = useState<number | null>(null);
  const [activeClickedDoor, setActiveClickedDoor] = useState<number | null>(
    null
  );
  const [resultList, setResultList] = useState<ResultListI[]>([]);

  useEffect(() => {
    const storedResultList = localStorage.getItem("resultList");
    if (storedResultList) {
      setResultList(JSON.parse(storedResultList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("resultList", JSON.stringify(resultList));
  }, [resultList]);

  return (
    <DoorContext.Provider
      value={{
        userSettings,
        setUserSettings,
        isGameRunning,
        setIsGameRunning,
        doorSequence,
        myDoors,
        switcher,
        setSwitcher,
        setMyDoors,
        win,
        setWin,
        winMsg,
        setWinMsg,
        activeDoorIndex,
        setActiveDoorIndex,
        activeClickedDoor,
        setActiveClickedDoor,
        resultList,
        setResultList,
      }}
    >
      {children}
    </DoorContext.Provider>
  );
};
