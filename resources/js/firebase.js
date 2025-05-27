import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
    apiKey: "AIzaSyC3BIzLf83xWQBhOdjp9ZN_Ztp9dT-OmVc",
    authDomain: "fblaravel-4a310.firebaseapp.com",
    databaseURL: "https://fblaravel-4a310-default-rtdb.firebaseio.com",
    projectId: "fblaravel-4a310",
    storageBucket: "fblaravel-4a310.appspot.com",
    messagingSenderId: "1066486198695",
    appId: "1:1066486198695:web:fc9c6bf2b760dc9721c682",
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
