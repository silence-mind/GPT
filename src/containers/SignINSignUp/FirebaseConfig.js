import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAnjy3AxQep0NVHBKXXSu--NNinhTXsN0s",
  authDomain: "newemailpassword-c4c49.firebaseapp.com",
  projectId: "newemailpassword-c4c49",
  storageBucket: "newemailpassword-c4c49.appspot.com",
  messagingSenderId: "662867159907",
  appId: "1:662867159907:web:eca0ff9ba527082afb8156",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getAuth(app);
