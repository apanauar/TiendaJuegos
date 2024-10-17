
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nappagamess.firebaseapp.com",
  projectId: "nappagamess",
  storageBucket: "nappagamess.appspot.com",
  messagingSenderId: "359206990581",
  appId: "1:359206990581:web:4985476387d9cb2b5d0bbc"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

