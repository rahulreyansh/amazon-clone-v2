import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrHbgVTB8nIiyA47BvSQoLbXH3g19YnDM",
  authDomain: "clone-5f0f0.firebaseapp.com",
  projectId: "clone-5f0f0",
  storageBucket: "clone-5f0f0.appspot.com",
  messagingSenderId: "396232823512",
  appId: "1:396232823512:web:5ff89dfade13977d1b3dad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
