// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo4wzibaFCEBBZcJ4oYTM3fWavghT2TOk",
  authDomain: "challenge-ade13.firebaseapp.com",
  projectId: "challenge-ade13",
  storageBucket: "challenge-ade13.appspot.com",
  messagingSenderId: "476004026688",
  appId: "1:476004026688:web:b47e5484a80663e20c12a5",
  measurementId: "G-6Q21EY9YTG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const signUpUser = (username, password) => {
  createUserWithEmailAndPassword(auth, username, password)
    .then((res) => {
      alert("sucess");
    })
    .catch((error) => {
      alert(error);
    });
};

const signOutUser = () => {
  signOut(auth);
};
export { auth, app, signUpUser, signOutUser };
