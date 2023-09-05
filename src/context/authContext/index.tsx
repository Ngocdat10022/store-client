import { VITE_APP_ACCESSTOKEN_KEY, VITE_APP_USERINFO_KEY } from "@/config";
import { initalStateAuth } from "@/constant";
import { auth } from "@/firebase";
import useLocalStorage from "@/hook/useLocalstorage";
import { IAuthContext } from "@/interface";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IPropsAuthContextProvider {
  children: React.ReactNode;
}
const initalAuthContext = {
  accessToken: initalStateAuth.accessToken,
  setAccessToken: initalStateAuth.setAccessToken,
  tokenFromStorage: "",
  setTokenFromStorage: () => null,
  user: {},
  setUser: initalStateAuth.setUser,
  handleSignWithGoogle: () => null,
  handleLogout: () => null,
  handleSignWithFacebook: () => null,
  loading: false,
  userFromStorage: {},
  setUserFromStorage: () => null,
  handleLogoutWithEmail: () => null,
};
const authContext = createContext<IAuthContext>(initalAuthContext);

const AuthContextProvider = ({ children }: IPropsAuthContextProvider) => {
  const [tokenFromStorage, setTokenFromStorage] = useLocalStorage(
    VITE_APP_ACCESSTOKEN_KEY,
    ""
  );
  const [userFromStorage, setUserFromStorage] = useLocalStorage(
    `${VITE_APP_USERINFO_KEY}`,
    ""
  );

  const [user, setUser] = useState<any>(userFromStorage);
  const [accessToken, setAccessToken] = useState<any>(tokenFromStorage);
  const [loading, setLoading] = useState<boolean>(initalAuthContext.loading);

  // Handle Login with google
  const handleSignWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      setTokenFromStorage(token);
      setUserFromStorage(user);
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
      setUserFromStorage(result?.user);
      setTokenFromStorage(accessToken);
    } catch (error) {
      console.log("error", error);
    }
  };

  // Handle logout with firebase
  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        localStorage.removeItem(`${VITE_APP_ACCESSTOKEN_KEY}`);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // handleLogout with email
  const handleLogoutWithEmail = () => {
    localStorage.removeItem(`${VITE_APP_ACCESSTOKEN_KEY}`);
    localStorage.removeItem(`${VITE_APP_USERINFO_KEY}`);
    setAccessToken("");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  });

  return (
    <authContext.Provider
      value={{
        tokenFromStorage,
        setTokenFromStorage,
        accessToken,
        setAccessToken,
        user,
        setUser,
        loading,
        handleSignWithGoogle,
        handleLogout,
        handleSignWithFacebook,
        userFromStorage,
        setUserFromStorage,
        handleLogoutWithEmail,
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
