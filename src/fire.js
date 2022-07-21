import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDRB9MdjIx4ucJQwCCJEb2jHVAP_ms6d4c",
  authDomain: "registr-e9b9b.firebaseapp.com",
  projectId: "registr-e9b9b",
  storageBucket: "registr-e9b9b.appspot.com",
  messagingSenderId: "380410664867",
  appId: "1:380410664867:web:3885560985565a502f2c16",
  measurementId: "G-JLB6TXTNR8",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
