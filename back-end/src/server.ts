import express, { response } from "express";

require("dotenv").config();

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  connectAuthEmulator,
} from "firebase/auth";

// Express
const server = express();
server.use(express.json());

// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDFWmyAAedcFhsiUlzDTbJo6VZObkx8zd8",
  authDomain: "biko-plus-project.firebaseapp.com",
  projectId: "biko-plus-project",
  storageBucket: "biko-plus-project.appspot.com",
  messagingSenderId: "656188181604",
  appId: "1:656188181604:web:b47339330b2cbd6178e371",
  measurementId: "G-52C5LP1WSG",
};
const app = initializeApp(firebaseConfig);

//Emulator
const auth = getAuth(app); //<-----------------
connectAuthEmulator(auth, "http://localhost:9099");

//Routes
server.post("/sign-up", async (request, response) => {
  const { body } = request;

  if (!body.email || !body.password)
    return response.status(400).json({
      error: "missing fields",
    });

  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );
    return response.status(200).json(user);
  } catch (error) {
    return response.status(500).json({
      error: "internal server error",
    });
  }
});

// server.post("/sign-in", (req, res) => {
//   return res.send("Salve");
// });

// server.get("/logout", (req, res) => {
//   return res.send("Salve");
// });

let port = 3333;
server.listen(port, () => console.log(`server is listening at port ${port}`));
