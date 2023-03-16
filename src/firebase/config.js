import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDB01rjApc6OwyrIkor36wBxMM6le5BG7M",
  authDomain: "readinglistapp-641ab.firebaseapp.com",
  projectId: "readinglistapp-641ab",
  storageBucket: "readinglistapp-641ab.appspot.com",
  messagingSenderId: "723445568744",
  appId: "1:723445568744:web:0e36599ba5f49edb3ca55d",
};

// NOTE instead of importing the entire firebase library we only brought in what we needed. So we do not need to drill into firebase as we have done in the past "firebase.initializeApp(firebaseConfig)"
initializeApp(firebaseConfig);
