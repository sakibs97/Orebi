
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl6gasByLjGnpgCA2BDny1ikDbwcyeeEE",
  authDomain: "todo-b5fa9.firebaseapp.com",
  databaseURL: "https://todo-b5fa9-default-rtdb.firebaseio.com",
  projectId: "todo-b5fa9",
  storageBucket: "todo-b5fa9.appspot.com",
  messagingSenderId: "655744776399",
  appId: "1:655744776399:web:ee7d603a7c00cd60d15fba",
  measurementId: "G-PYFHQEX9XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
export default firebaseConfig