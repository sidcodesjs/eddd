// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBZEWtY_61gXhIVjyIOWVQZ6v6whsa7YTM",
    authDomain: "edzest-8b950.firebaseapp.com",
    projectId: "edzest-8b950",
    storageBucket: "edzest-8b950.appspot.com",
    messagingSenderId: "846152588644",
    appId: "1:846152588644:web:2fc64c06de5251985bee71",
    measurementId: "G-WHEZCW173T"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, signInWithPopup, provider };
