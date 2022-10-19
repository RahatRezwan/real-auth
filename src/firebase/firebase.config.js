import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyAqziwYQP8YV3wKqcOhM0Xg7AN8-gYu7mw",
   authDomain: "real-auth-app.firebaseapp.com",
   projectId: "real-auth-app",
   storageBucket: "real-auth-app.appspot.com",
   messagingSenderId: "52021821909",
   appId: "1:52021821909:web:90e4646b4a2b0ed2eb7d5c",
};

const app = initializeApp(firebaseConfig);

export default app;
