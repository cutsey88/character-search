import { initializeApp } from 'firebase/app';
import  { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJSmpojlOqq0dFQVEefLi2uJAm_rKW4NI",
    authDomain: "character-search-be1bd.firebaseapp.com",
    projectId: "character-search-be1bd",
    storageBucket: "character-search-be1bd.appspot.com",
    messagingSenderId: "247283469388",
    appId: "1:247283469388:web:9863f919278002504af8e9",
    measurementId: "G-ND29H6DRBS"
  };

initializeApp(firebaseConfig);
const firestore = getFirestore();

export { firestore };