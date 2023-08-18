// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKspzEqOmJNlSFwVi7zKgx5iUlT0eAEWA",
  authDomain: "assignment-2cbdd.firebaseapp.com",
  projectId: "assignment-2cbdd",
  storageBucket: "assignment-2cbdd.appspot.com",
  messagingSenderId: "72651940373",
  appId: "1:72651940373:web:9a97d1e954c329ad88241c",
  measurementId: "G-B6LJS4FGGY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app.name && typeof window !== "undefined") {
  const analytics = getAnalytics(app);
}

export const auth = getAuth(app);
