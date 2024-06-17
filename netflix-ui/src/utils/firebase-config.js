import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfb8pYc59sXqgZdVegf_wTz-D6XAN_jOE",
  authDomain: "react-netflix-clone-88584.firebaseapp.com",
  projectId: "react-netflix-clone-88584",
  storageBucket: "react-netflix-clone-88584.appspot.com",
  messagingSenderId: "233359493383",
  appId: "1:233359493383:web:16fe5c3d91c95a93279da2",
  measurementId: "G-FGTKV1E4HB"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);