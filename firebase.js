// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkGTKJxsfyV-SCHy6mOifjv1gbLsSHoLc",
  authDomain: "thenia-ce8a9.firebaseapp.com",
  projectId: "thenia-ce8a9",
  storageBucket: "thenia-ce8a9.appspot.com",
  messagingSenderId: "198143694067",
  appId: "1:198143694067:web:1cbbbb9c7d323cfd905386",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
