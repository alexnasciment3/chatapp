import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDBJC6JJ1BJgueJdiFTa8udjkQcNA87PQY",
    authDomain: "chatapp-bb5cc.firebaseapp.com",
    projectId: "chatapp-bb5cc",
    databaseURL: "https://chatapp-bb5cc-default-rtdb.firebaseio.com/",
    storageBucket: "gs://chatapp-bb5cc.appspot.com",
    messagingSenderId: "849144081490",
    appId: "1:849144081490:web:8c22297bffa88be06a438b",
    measurementId: "G-285KKMJV44"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
