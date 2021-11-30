import express, { response } from "express";

require("dotenv").config();

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Express
const server = express();
server.use(express.json());

// Firebase
const firebaseConfig = {};
const app = initializeApp(firebaseConfig);

//Emulator
const auth = getAuth(app); //<-----------------
connectAuthEmulator(auth, "http://localhost:9099");

//Routes
server.post("/sign-up", async (req, res) => {
  const { body } = req;

  if (!body.email || !body.password)
    return res.status(400).json({
      error: "missing fields",
    });

  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      error: error.code,
    });
  }
});

server.post("/sign-in", async (req, res) => {
  const { body } = req;

  if (!body.email || !body.password)
    return res.status(400).json({
      error: "missing fields",
    });

  try {
    const user = await signInWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      error: error.code,
    });
  }
});

server.get("/sign-out", async (req, res) => {
  const { body } = req;
  return res.send("Salve");
});

let port = 3333;
server.listen(port, () => console.log(`server is listening at port ${port}`));
