import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChYEgpbzKZaSdKhkLRC3cfVdGcf3JjkNo",
  authDomain: "twitter-two-e1d1e.firebaseapp.com",
  projectId: "twitter-two-e1d1e",
  storageBucket: "twitter-two-e1d1e.appspot.com",
  messagingSenderId: "777199273697",
  appId: "1:777199273697:web:271ac8e97fa779d84619a0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
