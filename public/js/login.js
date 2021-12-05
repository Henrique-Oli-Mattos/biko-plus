// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
// import {
//   getDatabase,
//   ref,
//   child,
// } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

// // onAuthStateChanged(auth, (user) => {
// //   if (user != null) {
// //     console.log("logged in!");
// //   } else {
// //     console.log("No User");
// //   }
// // });
// alert("Login HOSTING works");

// // Initialize Firebase
// const firebaseConfig = {
//   //enquanto n tiver enviroment vai ficar vazio no github
// };
// const app = initializeApp(firebaseConfig);
// document.getElementById("buttonLogin").addEventListener("click", () => {
//   login();
// });

// alert("hosting working");
// function login() {
//   let email = document.getElementById("emailLogin").value;
//   let senha = document.getElementById("senhaLogin").value;

//   const auth = getAuth(app);

//   signInWithEmailAndPassword(auth, email, senha)
//     .then((userCredential) => {
//       let user = userCredential.user;
//       console.log(user);
//       console.log(userCredential);

//       // //Adiciona este usuário ao banco de dados
//       alert("User Logged");
//     })
//     .catch((error) => {
//       alert(error);
//     });
// }
