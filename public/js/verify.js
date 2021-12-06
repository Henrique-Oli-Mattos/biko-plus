import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// onAuthStateChanged(auth, (user) => {
//   if (user != null) {
//     console.log("logged in!");
//   } else {
//     console.log("No User");
//   }
// });

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB4rVAcVULCUb2AlUecXT89edZzcaD4SUw",
  authDomain: "biko-plus-project-1e054.firebaseapp.com",
  databaseURL: "https://biko-plus-project-1e054-default-rtdb.firebaseio.com",
  projectId: "biko-plus-project-1e054",
  storageBucket: "biko-plus-project-1e054.appspot.com",
  messagingSenderId: "870890276247",
  appId: "1:870890276247:web:a6ccbdff7f0b9f9d6670d2",
  //enquanto n tiver enviroment vai ficar vazio no github
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("botao--sair").style.display = "block";
    document.getElementById("homeWelcome").style.display = "block";
    document.getElementById("botao--login").style.display = "none";
    document.getElementById("botao--entrar").style.display = "none";
  } else {
    document.getElementById("botao--sair").style.display = "none";
    document.getElementById("homeWelcome").style.display = "none";
    document.getElementById("botao--login").style.display = "block";
    document.getElementById("botao--entrar").style.display = "block";
  }
});
