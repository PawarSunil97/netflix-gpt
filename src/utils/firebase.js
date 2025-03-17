// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIhfYRt-K5HLRiFtAHurOReXaZxKZIFzg",
  authDomain: "netflix-gpt-3b577.firebaseapp.com",
  projectId: "netflix-gpt-3b577",
  storageBucket: "netflix-gpt-3b577.firebasestorage.app",
  messagingSenderId: "628784661134",
  appId: "1:628784661134:web:e476aa3137eb98e0f7bfdf",
  measurementId: "G-4Z3S18H77H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();