// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW0OFhNSfLtlwAZ2zZ37n22Nfq1BV7GJA",
  authDomain: "music-therapy-7b33e.firebaseapp.com",
  projectId: "music-therapy-7b33e",
  storageBucket: "music-therapy-7b33e.appspot.com",
  messagingSenderId: "277317354494",
  appId: "1:277317354494:web:6422c97cd00181c96376af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);