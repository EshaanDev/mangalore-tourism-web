// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI3MJFCxgyzj-W1Di_ohXAeB2tvE1iUos",
  authDomain: "mangalore-tourism-web.firebaseapp.com",
  projectId: "mangalore-tourism-web",
  storageBucket: "mangalore-tourism-web.appspot.com",
  messagingSenderId: "559646229187",
  appId: "1:559646229187:web:d3ccf576887458f32a1876",
  measurementId: "G-QH34D9YLCE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const analytics = getAnalytics(app);
const db = firebase.firestore();

export { auth, provider,db };
