// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvC9wo75r9hjX4rLryIRUAQURRHeSoynA",
  authDomain: "cd-planet.firebaseapp.com",
  projectId: "cd-planet",
  storageBucket: "cd-planet.appspot.com",
  messagingSenderId: "160044647748",
  appId: "1:160044647748:web:4ee21f2df0b2078cedc311",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
