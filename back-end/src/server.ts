import express, { response } from "express";

const app = express();

app.get("/test-get", (req, res) => {
  //Resquest => Entrando
  //Response => Saindo
  return res.send("Salve");
});

app.post("/signin", (req, res) => {
  return res.send("Salve");
});

app.get("/login", (req, res) => {
  return res.send("Salve");
});

app.get("/logout", (req, res) => {
  return res.send("Salve");
});

let port = 3000;
app.listen(port, () => console.log(`server is listening at port ${port}`));
