import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCnQWoN0VFEMuVq4owNq659w4XgvsqQxIc",
  authDomain: "portfolio-app-8add3.firebaseapp.com",
  projectId: "portfolio-app-8add3",
  storageBucket: "portfolio-app-8add3.firebasestorage.app",
  messagingSenderId: "884808242636",
  appId: "1:884808242636:web:605ba34cded3908bce7969",
  measurementId: "G-JGLREF11XE"
};


const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
