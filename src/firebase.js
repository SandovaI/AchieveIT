// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhjEZxSzNYBCfGX8HlHO6_2",
  authDomain: "achieveit-49164.firebaseapp.com",
  projectId: "achieveit-49164",
  storageBucket: "achieveit-49164.appspot.com",
  messagingSenderId: "881053365765",
  appId: "1:881053365765:web:cc4d2913d295a9a17e0e6c",
  measurementId: "G-KQ9BZXQWQP",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const app = initializeApp(firebaseConfig);

const storage = getStorage();
const db = getFirestore();
export { app, storage, db };
