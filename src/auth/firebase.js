// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAFWXY6dIHuYdfoncBEvXIz2hdCxQ_Kkuk",
  authDomain: "edutech-payment.firebaseapp.com",
  projectId: "edutech-payment",
  storageBucket: "edutech-payment.appspot.com",
  messagingSenderId: "612710319396",
  appId: "1:612710319396:web:063888b8f03e033fb6dfb1",
  measurementId: "G-060PF3WDJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);