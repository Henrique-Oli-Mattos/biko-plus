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

document.getElementById("btnSalvarAU").addEventListener("click", () => {
  register();
});

//Configura a função cadastrar
function register() {
  alert("Register");
  //pegar todos os inputs, no momento apenas do usuário.
  let nome = document.getElementById("nomeAU").value;
  let data = document.getElementById("dataAU").value;
  let email = document.getElementById("emailAU").value;
  let senha = document.getElementById("senhaAU").value;
  let profissao = document.getElementById("profissaoAU").value;
  let tempoexp = document.getElementById("tempoexpAU").value;
  let telefone = document.getElementById("telefoneAU").value;
  let cpf = document.getElementById("cpfAU").value;
  let curso = document.getElementById("cursoAU").value;
  let instituição = document.getElementById("instituiçãoAU").value;
  let btnSalvar = document.getElementById("btnSalvarAU").value;

  console.log(
    nome,
    data,
    email,
    senha,
    profissao,
    tempoexp,
    telefone,
    cpf,
    curso,
    instituição,
    btnSalvar
  );
  if (
    !validate_field("nome") ||
    !validate_field("data") ||
    !validate_field("email") ||
    !validate_field("senha") ||
    !validate_field("profissao") ||
    !validate_field("tempoexp") ||
    !validate_field("telefone") ||
    !validate_field("cpf") ||
    !validate_field("curso") ||
    !validate_field("instituição") ||
    !validate_field("btnSalvar")
  ) {
    alert("Um ou mais campos vazios");
    return;
  }

  if (!validate_email(email)) {
    alert("email inválido");
    return;
  }
  if (!validate_password(senha)) {
    alert("senha inválida");
    return;
  }

  const auth = getAuth(app);
  const db = getDatabase(app);

  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCrential) => {
      let user = userCrential.user;
      console.log(user);
      console.log(userCrential);

      // //Adiciona este usuário ao banco de dados

      set(ref(db, "users/" + user.uid), {
        name: nome,
        email: email,
        data: data,
        isWorker: true,
        uid: user.uid,
        last_login: Date.now(),
      });

      set(ref(db, "workersInfo/" + user.uid), {
        profissao: profissao,
        tempoexp: tempoexp,
        telefone: telefone,
        cpf: cpf,
        curso: curso,
        instituição: instituição,
        uid: user.uid,
        last_login: Date.now(),
      });

      alert("worker Created");
    })
    .catch((error) => {
      let error_message = error.message;

      alert(error_message);
    });
}
function validate_email(email) {
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
