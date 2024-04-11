// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9kewRlFhwDJp0QhW4edKrxo4lR9mXgt4",
    authDomain: "fir-deploy-vti.firebaseapp.com",
    projectId: "fir-deploy-vti",
    storageBucket: "fir-deploy-vti.appspot.com",
    messagingSenderId: "345920077070",
    appId: "1:345920077070:web:a8192ea293a138a537ab5f"
};

// Initialize Firebase\

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;