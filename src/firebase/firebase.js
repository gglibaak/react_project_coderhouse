import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCNu9-j86Glf87ZovCMP2qkICmoUlNayk4",
  authDomain: "reactcoderinstrument.firebaseapp.com",
  projectId: "reactcoderinstrument",
  storageBucket: "reactcoderinstrument.appspot.com",
  messagingSenderId: "563150442221",
  appId: "1:563150442221:web:ee34306c9d13d27d1cc6e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)