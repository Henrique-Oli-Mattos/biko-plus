// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC77mNi4Urs8SDDi7E2ShNCtn4U8j1G0cw",
//   authDomain: "biko-plus.firebaseapp.com",
//   projectId: "biko-plus",
//   storageBucket: "biko-plus.appspot.com",
//   messagingSenderId: "683124184892",
//   appId: "1:683124184892:web:df835ce95f402954b73039",
//   measurementId: "G-NFE8N1KV7F",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { FirebaseContext } from "./FirestoreContext";

const FIREBASE_EMULATOR = Boolean(process.env.FIREBASE_EMULATOR);

const db_context = new FirebaseContext(FIREBASE_EMULATOR);
db_context.connect();

export { db_context };
