// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6TexoNwiZuFx3AIWgJIsn-BH6GC2ULnM",
  authDomain: "latihan-292a7.firebaseapp.com",
  projectId: "latihan-292a7",
  storageBucket: "latihan-292a7.firebasestorage.app",
  messagingSenderId: "782042651794",
  appId: "1:782042651794:web:29f9f705194b2f781ada4b",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };
