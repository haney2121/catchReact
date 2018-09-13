import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAJ1JO0MFXpiPcaa623MioIvLyGJaW_zAA",
    authDomain: "catch-of-the-day-justin-683fb.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-justin-683fb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;