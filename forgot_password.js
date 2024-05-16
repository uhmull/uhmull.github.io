import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbhVXh3rXoHJYBGHBXfBnD4T8ClvLJr8Y"
  authDomain: "smartstudy-60061.firebaseapp.com",
  projectId: "smartstudy-60061",
  storageBucket: "smartstudy-60061.appspot.com",
  messagingSenderId: "447511772715",
  appId: "1:447511772715:web:e08a86a47e3b03ecb6746e",
  measurementId: "G-7V1ZH4744F"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get elements from DOM
const emailInput = document.getElementById("email");
const resetButton = document.getElementById("reset");

document.getElementById("reset").addEventListener("click", function() {
  const email = document.getElementById("email").value;

  const auth = getAuth(firebaseApp);
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("work")
      alert("Password reset email sent!");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});