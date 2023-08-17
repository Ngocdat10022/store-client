import { IUser } from "./user.interface";

export interface IAuthContext {
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  tokenFromStorage: string;
  setTokenFromStorage: React.Dispatch<React.SetStateAction<string>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  userFromStorage: any;
  setUserFromStorage: React.Dispatch<React.SetStateAction<IUser>>;
  loading: boolean;
  handleSignWithGoogle: () => void;
  handleLogout: () => void;
  handleSignWithFacebook: () => void;
  handleLogoutWithEmail: () => void;
}
