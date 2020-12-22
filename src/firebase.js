import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyClRtOKERtrpxJA3triIvenLgUZ33VpgK0",
  authDomain: "clone-8a3b6.firebaseapp.com",
  projectId: "clone-8a3b6",
  storageBucket: "clone-8a3b6.appspot.com",
  messagingSenderId: "17087404265",
  appId: "1:17087404265:web:6bf2ff43b9225a90d0f878",
  measurementId: "G-ZGFGKH219B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
