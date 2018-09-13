import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC56TTwU0fj-7MGJ6GRF13kL1hHoNg9xk0",
        authDomain: "integration-matrix.firebaseapp.com",
        databaseURL: "https://integration-matrix.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//Named Export
export { firebaseApp };
//Default Export
export default base;