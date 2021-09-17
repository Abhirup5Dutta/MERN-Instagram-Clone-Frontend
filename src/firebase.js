import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD8HxFlSixTFFdSwuGLEAJzTQfbvUpxjco",
  authDomain: "mern-instagram-clone-9d90d.firebaseapp.com",
  projectId: "mern-instagram-clone-9d90d",
  storageBucket: "mern-instagram-clone-9d90d.appspot.com",
  messagingSenderId: "953715798589",
  appId: "1:953715798589:web:1bdd775e91db8506e67054",
  measurementId: "G-HHEQ31KFEH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
