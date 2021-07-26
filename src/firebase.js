import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6EnKCwT9j5DCit9X3vGC3MXA_cBQ9dIk",
  authDomain: "disney-plus-clone-8cf52.firebaseapp.com",
  projectId: "disney-plus-clone-8cf52",
  storageBucket: "disney-plus-clone-8cf52.appspot.com",
  messagingSenderId: "640689614153",
  appId: "1:640689614153:web:b6eee3df66d6e901fd3e98",
  measurementId: "G-5N1EJK0Z2T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
