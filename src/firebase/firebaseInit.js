import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDLOebL6CE-h321ysHCnj-gMDl_64fagP0",
    authDomain: "blogproject-d785e.firebaseapp.com",
    projectId: "blogproject-d785e",
    storageBucket: "blogproject-d785e.appspot.com",
    messagingSenderId: "697463602741",
    appId: "1:697463602741:web:a54303f2a01708ee69bb7c"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore()
  export default db
  