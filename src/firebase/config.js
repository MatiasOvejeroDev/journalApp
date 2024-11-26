// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhXckrBWCrlam4RznII6z7Xyxlc_BD-rI",
  authDomain: "journalapp-86742.firebaseapp.com",
  projectId: "journalapp-86742",
  storageBucket: "journalapp-86742.appspot.com",
  messagingSenderId: "743248785175",
  appId: "1:743248785175:web:8b4c50d363b657df871152",
  measurementId: "G-0RQ0R0WFJT",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
export const fireBaseDB = getFirestore(firebaseApp);
