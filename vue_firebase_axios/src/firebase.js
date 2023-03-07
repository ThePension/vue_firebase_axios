import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt9uvsRnAzuC_FJQN8hSWt92IE8ugJ46s",
  authDomain: "vue-firebase-axios-61ee0.firebaseapp.com",
  databaseURL: "https://vue-firebase-axios-61ee0-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "vue-firebase-axios-61ee0",
  storageBucket: "vue-firebase-axios-61ee0.appspot.com",
  messagingSenderId: "465041330597",
  appId: "1:465041330597:web:c6f86805464bf30146584c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db; //firebase.database();