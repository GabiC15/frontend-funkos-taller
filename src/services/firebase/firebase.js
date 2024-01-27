// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMpwOH-HXhOCuiUZlK7yM6X0SvHNOFZsw",
  authDomain: "funkoplanet-93eb5.firebaseapp.com",
  projectId: "funkoplanet-93eb5",
  storageBucket: "funkoplanet-93eb5.appspot.com",
  messagingSenderId: "678586297839",
  appId: "1:678586297839:web:6624672071b53ef82a1a1a",
  measurementId: "G-E0H96MQ4YS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
