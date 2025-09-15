// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "bloomtrack-4tjj6",
  "appId": "1:290844021956:web:870077dccc262e7c4be591",
  "storageBucket": "bloomtrack-4tjj6.firebasestorage.app",
  "apiKey": "AIzaSyBhOQLY0UW8lzwMLClGus3RZX1CCjAjhTk",
  "authDomain": "bloomtrack-4tjj6.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "290844021956"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
