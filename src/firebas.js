import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS4M630XIT4IQyDMjGA6DQKCVpeIL0-es",
  authDomain: "fir-fd01e.firebaseapp.com",
  projectId: "fir-fd01e",
  storageBucket: "fir-fd01e.appspot.com",
  messagingSenderId: "17851199609",
  appId: "1:17851199609:web:f0fc879fea30729ba1e4a8",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
