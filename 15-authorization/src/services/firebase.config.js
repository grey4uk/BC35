// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'bc35-authorization.firebaseapp.com',
  projectId: 'bc35-authorization',
  storageBucket: 'bc35-authorization.appspot.com',
  messagingSenderId: '368322234941',
  appId: '1:368322234941:web:534186763c64f473d1f854',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const firebase = {
  auth,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
};

export default firebase;
