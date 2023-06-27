import { VITE_APP_ACCESSTOKEN_KEY } from "@/config";
import { initalStateAuth } from "@/constant";
import { auth } from "@/firebase";
import { useLocalStorage } from "@/hook/useLocalstorage";
import { IAuthContext } from "@/interface";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  ConfirmationResult,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IPropsAuthContextProvider {
  children: React.ReactNode;
}
const initalAuthContext = {
  accessToken: initalStateAuth.accessToken,
  setAccessToken: initalStateAuth.setAccessToken,
  user: {},
  setUser: initalStateAuth.setUser,
  handleSignWithGoogle: () => null,
  handleLogout: () => null,
  handleSignWithFacebook: () => null,
  handleSignInWithNumberPhone: () => null,
  loading: false,
  showOtp: false,
  setShowOtp: () => null,
  phoneNumber: "+84946351215",
  setPhoneNumber: () => null,
  otp: "",
  setOtp: () => null,
  verifyOtp: () => null,
};
const authContext = createContext<IAuthContext>(initalAuthContext);
declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: ConfirmationResult;
  }
}

const AuthContextProvider = ({ children }: IPropsAuthContextProvider) => {
  const [user, setUser] = useState<any>(initalAuthContext.user);

  const [accessToken, setAccessToken] = useLocalStorage(
    VITE_APP_ACCESSTOKEN_KEY
  );

  const [loading, setLoading] = useState<boolean>(initalAuthContext.loading);
  const [showOtp, setShowOtp] = useState<boolean>(initalAuthContext.showOtp);
  const [phoneNumber, setPhoneNumber] = useState<string>(
    initalAuthContext.phoneNumber
  );
  const [otp, setOtp] = useState<string>(initalAuthContext.otp);
  // Handle Login with google
  const handleSignWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log("userGoogleAccount", result?.user);
      console.log("accessTokenGoogleAccount", token);
      const user = result.user;
      setAccessToken(token);
      setUser(user);
    } catch (error) {
      console.log("error", error);
    }
  };
  // Handle login with Facebook
  const handleSignWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      console.log("userFacebookAccount", result?.user);
      console.log("accessTokenFacebookAccount", accessToken);
      setUser(result?.user);
      setAccessToken(accessToken);
    } catch (error) {
      console.log("error", error);
    }
  };

  //
  const onCapVerify = () => {
    if (!window?.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response: any) => {
            handleSignInWithNumberPhone();
            console.log("response", response);
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  };

  // Handle login with numberPhone

  const handleSignInWithNumberPhone = () => {
    try {
      setLoading(true);
      onCapVerify();
      const appVerifier = window?.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          console.log("login with number phone");
          window.confirmationResult = confirmationResult;
          setShowOtp(true);
          setLoading(false);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  // Verify OTP

  const verifyOtp = () => {
    window?.confirmationResult
      .confirm(otp)
      .then((result: any) => {
        const user = result.user;
        setUser(user);
        // ...
      })
      .catch((error: any) => {
        console.log("error", error);
      });
  };
  // Handle logout
  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        localStorage.removeItem(`${VITE_APP_ACCESSTOKEN_KEY}`);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  });
  return (
    <authContext.Provider
      value={{
        accessToken,
        setAccessToken,
        user,
        loading,
        showOtp,
        setShowOtp,
        phoneNumber,
        setPhoneNumber,
        otp,
        setOtp,
        setUser,
        handleSignWithGoogle,
        handleLogout,
        handleSignWithFacebook,
        handleSignInWithNumberPhone,
        verifyOtp,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(authContext);
};
export default AuthContextProvider;
