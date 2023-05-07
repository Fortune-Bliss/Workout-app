import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATkaobiwq4jhR52WOUIBlmmmCMbW5cHpM",
  authDomain: "fitness-app-d9f1e.firebaseapp.com",
  projectId: "fitness-app-d9f1e",
  storageBucket: "fitness-app-d9f1e.appspot.com",
  messagingSenderId: "742569027763",
  appId: "1:742569027763:web:bddab5b5153d15043868c6",
};

let app;
if (firebase.apps.lenght === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
