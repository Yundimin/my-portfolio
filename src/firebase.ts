import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD77NAgbYm19-1fPUdVsCHCeyNHAErcOto",
  authDomain: "choo-homepage.firebaseapp.com",
  projectId: "choo-homepage",
  storageBucket: "choo-homepage.appspot.com",
  messagingSenderId: "743087930005",
  appId: "1:743087930005:web:c41f86ea7c0179bfeff99c",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
