import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQA3NiGd19nf7XtIl6ky6k6ceZxYaNc20",
  authDomain: "miniblog-b46a2.firebaseapp.com",
  projectId: "miniblog-b46a2",
  storageBucket: "miniblog-b46a2.firebasestorage.app",
  messagingSenderId: "60922595212",
  appId: "1:60922595212:web:79e3caa92c0e280c2778a9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };
