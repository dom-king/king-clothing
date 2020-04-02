import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBlFFOlBwM9CxxQdhg1bkg1H9ZdYrUYY1g",
    authDomain: "king-db-e5204.firebaseapp.com",
    databaseURL: "https://king-db-e5204.firebaseio.com",
    projectId: "king-db-e5204",
    storageBucket: "king-db-e5204.appspot.com",
    messagingSenderId: "1031057462383",
    appId: "1:1031057462383:web:469ba2947ad909b514a99a"
};

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 