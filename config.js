import { initializeApp  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getStorage , ref,uploadBytes } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
 
import { getFirestore,collection, addDoc, getDocs, setDoc,updateDoc,doc,Timestamp  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 
 import {  getAuth, createUserWithEmailAndPassword,onAuthStateChanged ,signInWithEmailAndPassword,  signOut} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCILfo9EjBhl9JSB1O3KBUAvhbhmJFeCHo",
    authDomain: "my-project-batch-9.firebaseapp.com",
    projectId: "my-project-batch-9",
    storageBucket: "my-project-batch-9.appspot.com",
    messagingSenderId: "1093160750316",
    appId: "1:1093160750316:web:65df78b7f46c229a0069c9"
  };

  
   
  const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);
   const db = getFirestore(app);
   const storage = getStorage(app);

   
   

   
    
 
   

export { app,auth,  createUserWithEmailAndPassword ,
   signInWithEmailAndPassword,getFirestore , db
, collection, addDoc, getDocs,updateDoc ,doc,Timestamp,
initializeApp,onAuthStateChanged,  signOut, ref,uploadBytes, storage,   };





