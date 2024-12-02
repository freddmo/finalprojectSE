import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArfmbABRy-SLtwgMu05pufghr0mJp5Bp4",
  authDomain: "genericproformaweb.firebaseapp.com",
  projectId: "genericproformaweb",
  storageBucket: "genericproformaweb.appspot.com",
  messagingSenderId: "1032281476038",
  appId: "1:1032281476038:web:e6dc0580747047398880c7",
  measurementId: "G-10LE7Y9N03"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth,storage };
