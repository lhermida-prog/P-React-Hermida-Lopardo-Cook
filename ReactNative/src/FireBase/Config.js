// Import the functions you need from the SDKs you need
import app from "firebase/app"
import firebase from "firebase"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbwI5Z7E1D21DynXvcdI8Y6fyn9cSf6wU",
  authDomain: "trabajo-integrador-oficial.firebaseapp.com",
  projectId: "trabajo-integrador-oficial",
  storageBucket: "trabajo-integrador-oficial.firebasestorage.app",
  messagingSenderId: "394623261939",
  appId: "1:394623261939:web:5d70fa62bc0f648617eb86"
};
app.initializeApp (firebaseConfig)


export const auth = firebase.auth()
export const storage = app.storage();
export const db = app.firestore()

