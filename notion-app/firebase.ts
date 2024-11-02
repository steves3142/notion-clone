// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5kvBF8fW_dkIBTFunfZ0Ukdl6SyHAWmE",
  authDomain: "notionclone-54a2f.firebaseapp.com",
  projectId: "notionclone-54a2f",
  storageBucket: "notionclone-54a2f.firebasestorage.app",
  messagingSenderId: "1066872933698",
  appId: "1:1066872933698:web:809e7777b0a7ec9839ccdb"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp(); 
const db = getFirestore(app); 

export { db }; 