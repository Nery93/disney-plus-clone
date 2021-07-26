import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCn3qQmkuphgpPQX2BMjYY8mllrtPy4l_g",
  authDomain: "kodish-acesso-gdrive-267611.firebaseapp.com",
  projectId: "kodish-acesso-gdrive-267611",
  storageBucket: "kodish-acesso-gdrive-267611.appspot.com",
  messagingSenderId: "1007966695735",
  appId: "1:1007966695735:web:3a511c4407122865ec6ab2",
  measurementId: "G-XN757BPSLZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
