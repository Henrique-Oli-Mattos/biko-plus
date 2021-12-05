import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

// onAuthStateChanged(auth, (user) => {
//   if (user != null) {
//     console.log("logged in!");
//   } else {
//     console.log("No User");
//   }
// });
    
// Initialize Firebase
const firebaseConfig = {
  //enquanto n tiver enviroment vai ficar vazio no github
};

const app = initializeApp(firebaseConfig);

document.getElementById("btnSalvar").addEventListener("click", () => {
  register();
});

//Configura a função cadastrar
function register() {
  alert("Register");
  //pegar todos os inputs, no momento apenas do usuário.
  let name = document.getElementById("nomeCadastro").value;
  let email = document.getElementById("emailCadastro").value;
  let password = document.getElementById("senhaCadastro").value;
  let data = document.getElementById("dataCadastro").value;
  let checkbox = document.getElementById("termoUsoCadastro").value;

  //   let name = document.getElementById("nome").value;
  //   let email = document.getElementById("email").value;
  //   let password = document.getElementById("senha").value;

  console.log(name, email, password, data);
  if (
    !validate_field(email) ||
    !validate_field(name) ||
    !validate_field(password) ||
    !validate_field(data)
  ) {
    alert("Um ou mais campos vazios");
    return;
  }

  if (!validate_email(email)) {
    alert("email inválido");
    return;
  }
  if (!validate_password(password)) {
    alert("senha inválida");
    return;
  }

  const auth = getAuth(app);
  const db = getDatabase(app);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCrential) => {
      let user = userCrential.user;
      console.log(user);
      console.log(userCrential);

      // //Adiciona este usuário ao banco de dados
      set(ref(db, "users/" + user.uid), {
        name: name,
        email: email,
        data: data,
        isWorker: false,
        uid: user.uid,
        last_login: Date.now(),
      });

      alert("User Created");
    })
    .catch((error) => {
      let error_message = error.message;

      alert(error_message);
    });
}
function validate_email(email) {
  // expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (/^[^@]+@\w+(\.\w+)+\w$/.test(email) == true) {
    return true;
  } else {
    return false;
  }
}

function validate_password(password) {
  if (password < 6) return false;

  return true;
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  }

  return true;
}
