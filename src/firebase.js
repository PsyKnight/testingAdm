import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admintest-388cd.firebaseapp.com",
  projectId: "admintest-388cd",
  storageBucket: "admintest-388cd.appspot.com",
  messagingSenderId: "1097665650449",
  appId: "1:1097665650449:web:1bf1aca66447c44a3c36b0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
