// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM8BHck8TtAFytEHI8zIbexpTKFe0kcCA",
  authDomain: "euphoria-event-management-auth.firebaseapp.com",
  projectId: "euphoria-event-management-auth",
  storageBucket: "euphoria-event-management-auth.appspot.com",
  messagingSenderId: "101672631849",
  appId: "1:101672631849:web:63dd12bf906cbdf845a638"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app