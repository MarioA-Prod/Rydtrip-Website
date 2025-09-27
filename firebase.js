// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRCV4hi6PknJGhs9Skm4z5yK9TI-Ab4yk",
  authDomain: "rydtrip-30356.firebaseapp.com",
  projectId: "rydtrip-30356",
  storageBucket: "rydtrip-30356.firebasestorage.app",
  messagingSenderId: "541451777223",
  appId: "1:541451777223:web:b9d100ca316e2fb16f7ae2",
  measurementId: "G-869LLVTPGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services you need
export const auth = getAuth(app);
export const db = getFirestore(app);
