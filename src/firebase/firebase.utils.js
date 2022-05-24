import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {

    apiKey: "AIzaSyBuR3tVmBMyJhXUtOwW9c0_IfUlwTHQs6A",
  
    authDomain: "crwn-db-cf8e9.firebaseapp.com",
  
    projectId: "crwn-db-cf8e9",
  
    storageBucket: "crwn-db-cf8e9.appspot.com",
  
    messagingSenderId: "222627419487",
  
    appId: "1:222627419487:web:ec35802614a105346ed2ea",
  
    measurementId: "G-HWXEK5002L"
  
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;