

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore } from "firebase/firestore"; // Import firestore from firebase package

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI3MJFCxgyzj-W1Di_ohXAeB2tvE1iUos",
  authDomain: "mangalore-tourism-web.firebaseapp.com",
  dataSource : "https://mangalore-tourism-web-default-rtdb.firebaseio.com/",
  projectId: "mangalore-tourism-web",
  storageBucket: "mangalore-tourism-web.appspot.com",
  messagingSenderId: "559646229187",
  appId: "1:559646229187:web:d3ccf576887458f32a1876",
  measurementId: "G-QH34D9YLCE",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const db = new Firestore(); // Initialize firestore

export { auth, db, provider };

