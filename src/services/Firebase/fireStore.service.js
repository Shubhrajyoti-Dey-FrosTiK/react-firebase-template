import { collection, addDoc, getDocs } from "firebase/firestore";

// Database Ref
import { db } from "../../firebase";

export class FireStoreService {
  async add(collectionName, data) {
    try {
      await addDoc(collection(db, collectionName), data);
    } catch (error) {
      console.error(error);
    }
  }

  async getAll(collectionName) {
    return await getDocs(collection(db, collectionName));
  }
}
