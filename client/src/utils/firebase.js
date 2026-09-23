
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-48185.firebaseapp.com",
  projectId: "interviewiq-48185",
  storageBucket: "interviewiq-48185.firebasestorage.app",
  messagingSenderId: "104190122108",
  appId: "1:104190122108:web:48730c96c08c1793fbd1f9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}