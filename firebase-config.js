// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjarOAr5pk9cs5sA1D4Z3e1wvcUn1vqWU",
  authDomain: "apana-chat78.firebaseapp.com",
  projectId: "apana-chat78",
  storageBucket: "apana-chat78.firebasestorage.app",
  messagingSenderId: "139591149410",
  appId: "1:139591149410:web:a8b952270468f30761ae3b",
  measurementId: "G-EWFVESL3JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);