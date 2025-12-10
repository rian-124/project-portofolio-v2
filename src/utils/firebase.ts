// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx0HjDWE9ghOEqfK1QlAiO8zhd2Gk4dPI",
  authDomain: "portofolio-afrianfahrurrozi.firebaseapp.com",
  projectId: "portofolio-afrianfahrurrozi",
  storageBucket: "portofolio-afrianfahrurrozi.firebasestorage.app",
  messagingSenderId: "769646904850",
  appId: "1:769646904850:web:912e11875e0fce9122facb",
  measurementId: "G-21TSZ1YZYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = typeof window !== 'undefined' ? ( await isSupported() ? getAnalytics(app) : null) : null;