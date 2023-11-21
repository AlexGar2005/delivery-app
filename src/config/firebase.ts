// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCGACaafXNWLebzB0ooY1iDl5YbnSTDvU",
  authDomain: "react-portfolio-15240.firebaseapp.com",
  projectId: "react-portfolio-15240",
  storageBucket: "react-portfolio-15240.appspot.com",
  messagingSenderId: "1000238709930",
  appId: "1:1000238709930:web:311e09f817f611072064d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);