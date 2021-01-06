import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDFx9yy3bizFKcuZhaFON0kbsrphuEPuyI",
  authDomain: "random-passwrod-generator.firebaseapp.com",
  projectId: "random-passwrod-generator",
  storageBucket: "random-passwrod-generator.appspot.com",
  messagingSenderId: "296376953508",
  appId: "1:296376953508:web:26f4a6a962d30e411a9431"
};
  
  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  export default db;