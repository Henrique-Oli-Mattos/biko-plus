import * as admin from "firebase-admin";

class FirebaseContext {
  private use_emulator: boolean;
  private projectId: string;
  public firestore: FirebaseFirestore.Firestore;

  constructor(use_emulator: boolean) {
    this.use_emulator = use_emulator; //NÃO USAR COMO FALSE AINDA, PODE GERAR COBRANÇAS
    this.projectId = process.env.PROJECT_ID;
  }

  public connect() {
    if (this.use_emulator) {
      process.env["FIRESTORE_EMULATOR_HOST"] = "localhost:8081";
    }

    const firebase = admin.initializeApp({
      projectId: this.projectId,
    });

    console.info("firebase connected", {
      projectId: this.projectId,
      app: admin.app().name,
      USE_EMULATOR: process.env.USE_EMULATOR,
    });

    this.firestore = firebase.firestore();
  }
}

export { FirebaseContext };
