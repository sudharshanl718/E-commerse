// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS9jkG5aBBHWYgcaose5v6iF9piVMcso8",
  authDomain: "priya-1718.firebaseapp.com",
  projectId: "priya-1718",
  storageBucket: "priya-1718.appspot.com",
  messagingSenderId: "963836915365",
  appId: "1:963836915365:web:997f960d7206d28d99e74c",
  measurementId: "G-7M3BR56PE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)