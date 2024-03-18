export interface UserSettingsI {
  userName: string;
  intervalSpeed: number;
}

export interface UserSettingssssI {
  userSettings: UserSettingsI;
  setUserSettings: React.Dispatch<React.SetStateAction<UserSettingsI>>;
  onPlay: () => void;
  errorMessage: string;
}

export type ImageWrapperProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export interface ResultListI {
  user: string;
  result: string;
}
[];

export interface DoorContextI {
  userSettings: UserSettingsI;
  setUserSettings: React.Dispatch<React.SetStateAction<UserSettingsI>>;

  isGameRunning: boolean;
  setIsGameRunning: React.Dispatch<React.SetStateAction<boolean>>;

  doorSequence: number[];
  myDoors: number[];
  setMyDoors: React.Dispatch<React.SetStateAction<number[]>>;

  switcher: boolean;
  setSwitcher: React.Dispatch<React.SetStateAction<boolean>>;

  win: boolean;
  setWin: React.Dispatch<React.SetStateAction<boolean>>;

  winMsg: string;
  setWinMsg: React.Dispatch<React.SetStateAction<string>>;

  activeDoorIndex: number | null;
  setActiveDoorIndex: React.Dispatch<React.SetStateAction<number | null>>;

  activeClickedDoor: number | null;
  setActiveClickedDoor: React.Dispatch<React.SetStateAction<number | null>>;

  resultList: ResultListI[];
  setResultList: React.Dispatch<React.SetStateAction<ResultListI[]>>;
}
