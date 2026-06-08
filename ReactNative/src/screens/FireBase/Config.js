// Import the functions you need from the SDKs you need
import app from "firebase/app"
import firebase from "firebase"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXG1oU8TyDRRS6d9vJCWopffE5jlucK3Q",
  authDomain: "trabajo-integrador-e5385.firebaseapp.com",
  projectId: "trabajo-integrador-e5385",
  storageBucket: "trabajo-integrador-e5385.firebasestorage.app",
  messagingSenderId: "242215101086",
  appId: "1:242215101086:web:85b535b557103cf4eb118f",
  measurementId: "G-VTS30P0FJG"
};
app.initializeApp (firebaseConfig)


export const auth = firebase.auth()
export const db = app.firestore()