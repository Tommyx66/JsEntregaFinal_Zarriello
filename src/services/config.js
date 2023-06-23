import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

 
const firebaseConfig = {
  apiKey: "AIzaSyAaI8sRU_zzOyy8ERQlapX79iYmEGZn6jU",
  authDomain: "sonic-synergy.firebaseapp.com",
  projectId: "sonic-synergy",
  storageBucket: "sonic-synergy.appspot.com",
  messagingSenderId: "338287283060",
  appId: "1:338287283060:web:d8fddde79526d973ddfa21"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

