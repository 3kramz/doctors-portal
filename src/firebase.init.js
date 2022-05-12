// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiJ5xZse5VDOap7tduYTylilucQ5k6SZc",
  authDomain: "doctors-portal-x.firebaseapp.com",
  projectId: "doctors-portal-x",
  storageBucket: "doctors-portal-x.appspot.com",
  messagingSenderId: "205185633490",
  appId: "1:205185633490:web:5ded5da09871e7bbac710b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth