// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB81ptXCDNCvuyZZkCyK_EGqbMb1WhCA6s",
  authDomain: "coffee-store-app-80845.firebaseapp.com",
  projectId: "coffee-store-app-80845",
  storageBucket: "coffee-store-app-80845.firebasestorage.app",
  messagingSenderId: "370242360544",
  appId: "1:370242360544:web:0e3aede9be605d6231ac85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);