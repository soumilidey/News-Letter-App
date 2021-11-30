import * as firebase from 'firebase';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA_-5KZqXzp5k8ye2BXvQMviP6QqU_DFfQ",
    authDomain: "attendance-271dd.firebaseapp.com",
    databaseURL: "https://newsletter-271dd-default-rtdb.firebaseio.com",
    projectId: "attendance-271dd",
    storageBucket: "attendance-271dd.appspot.com",
    messagingSenderId: "724638234406",
    appId: "1:724638234406:web:837edeca40a987e0be33e7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.database();
  