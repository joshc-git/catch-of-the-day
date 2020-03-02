import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDgV9ekGm19J7XbphbBEeua5U9Ww9otJLo",
    authDomain: "catch-of-the-day-josh-c.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-josh-c.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;