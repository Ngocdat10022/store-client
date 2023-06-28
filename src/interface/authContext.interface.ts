import { IUser } from "./user.interface";

export interface IAuthContext {
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  loading: boolean;
  showOtp: boolean;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  otp: string;
  setShowOtp: React.Dispatch<React.SetStateAction<boolean>>;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  handleSignWithGoogle: () => void;
  handleLogout: () => void;
  handleSignWithFacebook: () => void;
  handleSignInWithNumberPhone: () => void;
  verifyOtp: () => void;
}
