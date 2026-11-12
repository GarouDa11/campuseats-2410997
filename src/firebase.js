import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5PVMgPor4DfEDe8QVKL5jXmOTCfLe06w",
  authDomain: "campuseats-2410997.firebaseapp.com",
  projectId: "campuseats-2410997",
  storageBucket: "campuseats-2410997.firebasestorage.app",
  messagingSenderId: "605152377718",
  appId: "1:605152377718:web:c05bd98298a5973a2e5857",
};

console.log("Checking API Key:", firebaseConfig.apiKey); // Check your browser console!

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
if (import.meta.env.VITE_USE_EMULATORS === "true") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
}
