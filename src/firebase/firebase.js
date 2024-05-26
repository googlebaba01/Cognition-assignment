import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO5NYR4pNjPGIkFpKM_2B3BYXaWgN_eGM",
  authDomain: "cognition-final.firebaseapp.com",
  projectId: "cognition-final",
  storageBucket: "cognition-final.appspot.com",
  messagingSenderId: "62004442380",
  appId: "1:62004442380:web:348473f6eebb1d06e14529",
  measurementId: "G-QK5DNCBKCY"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
