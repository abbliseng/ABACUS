// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARZZEyUrC8ey0aDawc62F8n9PRX-JPkKE",
  authDomain: "abacus-240a5.firebaseapp.com",
  projectId: "abacus-240a5",
  storageBucket: "abacus-240a5.appspot.com",
  messagingSenderId: "197360874438",
  appId: "1:197360874438:web:c218ab6887d22acd3038c7",
  measurementId: "G-HRPHEREENE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// console.log(database)

// const starCountRef = ref(db, 'news/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });