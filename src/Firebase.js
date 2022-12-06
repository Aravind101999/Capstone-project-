import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAajn4F5Zzx6rE2GXDOv_lSZuCRMGk76xU",
  authDomain: "auth-e9b96.firebaseapp.com",
  projectId: "auth-e9b96",
  storageBucket: "auth-e9b96.appspot.com",
  messagingSenderId: "127602639092",
  appId: "1:127602639092:web:3957853cf853d6d0dddea1",
  measurementId: "G-5E2F3Q8WR4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
