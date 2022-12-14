import React from 'react';
import ReactDOM from 'react-dom/client';
import { firestore } from './firebase/firebaseConfig';
import { doc, getDoc, getDocs } from "firebase/firestore"; 
import './index.css';
import App from './App';
import { async } from '@firebase/util';

// Initialize Firebase

/*async function getFireObject() {
  const coordsRef = doc(firestore, 'character-coords', 'pokemon-coords');
  const docSnap = await getDoc(coordsRef);
  const fobRef = docSnap.data();
  return fobRef;
}


const obRef = getFireObject();
console.log(obRef);
*/


async function getFireObject() {
  const docRef = doc(firestore, "character-coords", "pokemon-coords");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

getFireObject();

let obRef;

//const obRef = JSON.parse(gsRef);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App obRef={obRef} />
  </React.StrictMode>
);
