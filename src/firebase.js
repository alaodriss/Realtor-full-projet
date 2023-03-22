// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2yY4V3RuNkxh9_ueOB98gtLlGHQcW0uA",
  authDomain: "realtor-react-f3619.firebaseapp.com",
  projectId: "realtor-react-f3619",
  storageBucket: "realtor-react-f3619.appspot.com",
  messagingSenderId: "223055293763",
  appId: "1:223055293763:web:d9745da99458fb774b53f6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()