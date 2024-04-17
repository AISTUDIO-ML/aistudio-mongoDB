import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD1aTrne-m_jBHThYEdQGjFYz7A03kT3hA",
    authDomain: "aistudio-confidential-f9058.firebaseapp.com",
    projectId: "aistudio-confidential-f9058",
    storageBucket: "aistudio-confidential-f9058.appspot.com",
    messagingSenderId: "836248662559",
    appId: "1:836248662559:web:3ec3ca682e4df1a9f21b2a",
    measurementId: "G-MS21SXGSYL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GoogleAuthProvider, GithubAuthProvider, OAuthProvider };
