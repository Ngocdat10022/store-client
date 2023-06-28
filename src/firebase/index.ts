import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  VITE_APP_API_KEY,
  VITE_APP_APPID,
  VITE_APP_AUTHDOMAIN,
  VITE_APP_MEASUREMENTID,
  VITE_APP_MESSAGINGSENDERID,
  VITE_APP_PROJECTID,
  VITE_APP_STORAGEBUCKET,
} from "@/config";
const firebaseConfig = {
  apiKey: VITE_APP_API_KEY,
  authDomain: VITE_APP_AUTHDOMAIN,
  projectId: VITE_APP_PROJECTID,
  storageBucket: VITE_APP_STORAGEBUCKET,
  messagingSenderId: VITE_APP_MESSAGINGSENDERID,
  appId: VITE_APP_APPID,
  measurementId: VITE_APP_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
