import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

export const firestore = getFirestore(app);

// KeyProject 정보 받기
export const getKeyProjectInfo = collection(firestore, "key-project");

export const getData = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(firestore, collectionName));
  const data = querySnapshot.docs.map((doc) => doc.data());
  return data;
};
