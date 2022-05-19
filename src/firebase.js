import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_CONFIG } from "./constants/firebase";

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
