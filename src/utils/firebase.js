// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiEgxQIett6MHDAGmkbpOnn5AyOCl7GBw",
  authDomain: "netflixgpt-a7c6d.firebaseapp.com",
  projectId: "netflixgpt-a7c6d",
  storageBucket: "netflixgpt-a7c6d.appspot.com",
  messagingSenderId: "443457208919",
  appId: "1:443457208919:web:5af4595a35a799a4625912",
  measurementId: "G-4BDNJ7DXPJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
