import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbbCV8jEQTW7pOfy33toS9t1mQr6ySfPk",
    authDomain: "todobasesaiyam.firebaseapp.com",
    databaseURL: "https://todobasesaiyam.firebaseio.com",
    projectId: "todobasesaiyam",
    storageBucket: "todobasesaiyam.appspot.com",
    messagingSenderId: "636469517637",
    appId: "1:636469517637:web:9a54825d00cee6d698722c",
    measurementId: "G-8MWQRF8MV2"
});

const db = firebaseApp.firestore();
export default db;