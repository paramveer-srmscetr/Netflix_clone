

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDX6PZI-rDfwcaBVJFiyMCy11nXF02h_Ac",
  authDomain: "netflix-clone-f6696.firebaseapp.com",
  projectId: "netflix-clone-f6696",
  storageBucket: "netflix-clone-f6696.appspot.com",
  messagingSenderId: "97936584885",
  appId: "1:97936584885:web:6fef22803b6a71f0cb0efc",
  measurementId: "G-W8CPMCP7HN"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);