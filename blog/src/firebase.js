import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyATw6Hp8vwndnZBu3b5rFj3s6aM_k2ecBs",
    authDomain: "blogwebsite-991fd.firebaseapp.com",
    projectId: "blogwebsite-991fd",
    storageBucket: "blogwebsite-991fd.appspot.com",
    messagingSenderId: "625517080866",
    appId: "1:625517080866:web:aa9e86905f452a68f0b57b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const firestore= firebase.firestore();
  export const auth=firebase.auth();
  let provider= new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);
  export default firebase ;
  ;
