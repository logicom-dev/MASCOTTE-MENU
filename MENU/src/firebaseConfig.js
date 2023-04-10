// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKxiDTfOFGuT6VS8mGZKJ_PBELm_OxTiI",
  authDomain: "mascotte-7a725.firebaseapp.com",
  projectId: "mascotte-7a725",
  storageBucket: "mascotte-7a725.appspot.com",
  messagingSenderId: "549318756211",
  appId: "1:549318756211:web:834f903605249f46f52706",
  measurementId: "G-D8ZK929WCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);