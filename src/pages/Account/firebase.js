import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQ4JGDNWbdrLkTUJz42NBwTYOFvZaftMA",
  authDomain: "mscwebdtask.firebaseapp.com",
  projectId: "mscwebdtask",
  storageBucket: "mscwebdtask.appspot.com",
  messagingSenderId: "487766853928",
  appId: "1:487766853928:web:3fd953f6a05dd8ae13e81d"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {firestore, auth, provider};