import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRzFLsChLIEGGBSqZzijQQpPtZp3Vz4Mc",
  authDomain: "miniblog-a45b8.firebaseapp.com",
  projectId: "miniblog-a45b8",
  storageBucket: "miniblog-a45b8.appspot.com",
  messagingSenderId: "346597325128",
  appId: "1:346597325128:web:abf3d4dc3ea67950031b7d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };