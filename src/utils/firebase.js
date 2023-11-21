// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVhrsDadl84RhuoQ_P0s5kMlkt9SOKdIM",
  authDomain: "netflixgpt-921c2.firebaseapp.com",
  projectId: "netflixgpt-921c2",
  storageBucket: "netflixgpt-921c2.appspot.com",
  messagingSenderId: "493157279111",
  appId: "1:493157279111:web:b2afc708e691dd496c9f22",
  measurementId: "G-MKL15XT6LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();