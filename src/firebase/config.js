// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvrPWPRhYFPPu8zZ1T7O415kPDIg-GFBE",
  authDomain: "proyectoreact-gtshop.firebaseapp.com",
  projectId: "proyectoreact-gtshop",
  storageBucket: "proyectoreact-gtshop.appspot.com",
  messagingSenderId: "880339546337",
  appId: "1:880339546337:web:c20385cb90fe041fef07a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db1 = getFirestore(app);
