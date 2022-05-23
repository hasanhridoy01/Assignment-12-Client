// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcwir2MH5HmhmVSvsDja35DDvdlsY1Vpw",
  authDomain: "electric-items-side.firebaseapp.com",
  projectId: "electric-items-side",
  storageBucket: "electric-items-side.appspot.com",
  messagingSenderId: "613889078383",
  appId: "1:613889078383:web:9e4ac70ea190b918c6899a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;