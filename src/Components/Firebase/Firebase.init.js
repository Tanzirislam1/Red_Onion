// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfCsnI866g5kP6NSPUrZYDyGRn_iNBeRA",
  authDomain: "redonion-8a21d.firebaseapp.com",
  projectId: "redonion-8a21d",
  storageBucket: "redonion-8a21d.appspot.com",
  messagingSenderId: "234956898582",
  appId: "1:234956898582:web:e80d85da31d59b881c1037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;