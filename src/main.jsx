import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIDJn8QM_JkTiwYiV55WGu2AiPNcdZvsM",
  authDomain: "ecommerce-monster.firebaseapp.com",
  projectId: "ecommerce-monster",
  storageBucket: "ecommerce-monster.appspot.com",
  messagingSenderId: "387428594453",
  appId: "1:387428594453:web:aec37e06fe17b26db06f1c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
