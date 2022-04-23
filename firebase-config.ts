// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVhc_34RuIFK3cQPDKLUhebXcvJqPiYiE",
    authDomain: "chatapp-4ba2e.firebaseapp.com",
    projectId: "chatapp-4ba2e",
    storageBucket: "chatapp-4ba2e.appspot.com",
    messagingSenderId: "12602059966",
    appId: "1:12602059966:web:1db3d34efee303beec02ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
