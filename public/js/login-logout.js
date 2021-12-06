import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
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
document.getElementById("buttonLogin").addEventListener("click", () => {
  login();
});
const auth = getAuth(app);
document.getElementById("botao--sair").addEventListener("click", () => {
  signOut(auth);
});
function login() {
  let email = document.getElementById("emailLogin").value;
  let senha = document.getElementById("senhaLogin").value;

  const auth = getAuth(app);

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      let user = userCredential.user;
      console.log(user);
      console.log(userCredential);

      // //Adiciona este usuário ao banco de dados
    })
    .catch((error) => {
      alert(error);
    });
}
