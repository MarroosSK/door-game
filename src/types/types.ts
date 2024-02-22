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
