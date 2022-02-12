import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJn593Td07fmsXWsm6uTNh31XgIsEmWrY",
    authDomain: "troith.firebaseapp.com",
    projectId: "troith",
    storageBucket: "troith.appspot.com",
    messagingSenderId: "463056389951",
    appId: "1:463056389951:web:9d5f7e838efa8ea9ab758a"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };