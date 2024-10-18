import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlw-nxo3hhWAqXQwYTVC9G-IEMrrlUt9g",
  authDomain: "my-otp-platform.firebaseapp.com",
  projectId: "my-otp-platform",
  storageBucket: "my-otp-platform.appspot.com",
  messagingSenderId: "877475120865",
  appId: "1:877475120865:web:71a08053b27d68bcbe19a0",
  measurementId: "G-ZLJPYRYZ7C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
