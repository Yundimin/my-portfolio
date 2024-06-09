import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBB1Hlwcc848L8expaq3l20P6KzpXEk5cU",
  authDomain: "choo-page-b290f.firebaseapp.com",
  projectId: "choo-page-b290f",
  storageBucket: "choo-page-b290f.appspot.com",
  messagingSenderId: "910600133847",
  appId: "1:910600133847:web:22b6d6b0855fc805e66492",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
