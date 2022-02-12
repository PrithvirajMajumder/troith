import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJn593Td07fmsXWsm6uTNh31XgIsEmWrY",
    authDomain: "troith.firebaseapp.com",
    projectId: "troith",
    storageBucket: "troith.appspot.com",
    messagingSenderId: "463056389951",
    appId: "1:463056389951:web:9d5f7e838efa8ea9ab758a"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };