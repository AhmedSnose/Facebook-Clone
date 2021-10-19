import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyD__1PbpzrsuflDZcuTpdUnSceTgkKy5KA",
    authDomain: "fakebook-clone-c8b65.firebaseapp.com",
    projectId: "fakebook-clone-c8b65",
    storageBucket: "fakebook-clone-c8b65.appspot.com",
    messagingSenderId: "903628179788",
    appId: "1:903628179788:web:426aaf2c0262e6350e27e9",
    measurementId: "G-GPBXS9XJBJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;