import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // For database

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCnQWoN0VFEMuVq4owNq659w4XgvsqQxIc",
  authDomain: "portfolio-app-8add3.firebaseapp.com",
  projectId: "portfolio-app-8add3",
  storageBucket: "portfolio-app-8add3.firebasestorage.app",
  messagingSenderId: "884808242636",
  appId: "1:884808242636:web:605ba34cded3908bce7969",
  measurementId: "G-JGLREF11XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Firestore instance

export { db }; // Export Firestore for use in Contact.jsx
