import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAh-FjQ3jO3sFfaAKfep1o06_KnQx4MV8A",
    authDomain: "linkedin-clone-3ae46.firebaseapp.com",
    projectId: "linkedin-clone-3ae46",
    storageBucket: "linkedin-clone-3ae46.appspot.com",
    messagingSenderId: "908300589924",
    appId: "1:908300589924:web:92c50511ab66c5ae297871"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };