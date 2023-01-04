// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getFirestore, collection, getDocs, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
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

// Database
const db = getFirestore(app);

var events = null;

// LOADING NEWS FROM FB
// Get a list of news from your database
async function getNews(db) {
  const newsCol = collection(db, 'news');
  const newsSnapshot = await getDocs(newsCol);
  const newsList = newsSnapshot.docs.map(doc => doc.data());
  return newsList;
}

async function loadSiteInfo(db) {
  const docRef = doc(db, 'site-info', 'main')
  const docSnap = await getDoc(docRef)

  if (docSnap.exists() && document.getElementById('background-info') && document.getElementById('projectgroup-info')) {
    document.getElementById('background-info').textContent = docSnap.data()['background'];
    document.getElementById('projectgroup-info').textContent = docSnap.data()['projectgroup'];
  } else {
    // doc.data() will be undefined in this case
    console.warn("No such document or not on main page.");
  }
}

async function loadNews() {
  var news = await getNews(db)
  news.forEach(element => {
    load_news(element.date, element.title, element.content)
  });
}

async function loadNewsEditor() {
  var news = await getNews(db)
  news.forEach(element => {
    load_news_editor(element.date, element.title, element.content, element.link)
  });
}

async function loadMainEvents(db) {
  const col = collection(db, 'events');
  const snapshot = await getDocs(col);
  const l = snapshot.docs.map(doc => doc.data());
  events = l
}

window.addEventListener('load', function () {
  loadNews()
  loadNewsEditor()
  loadSiteInfo(db)
  loadMainEvents(db)
})

// event-card-title
// event-card-content

// HELPER FUNCTIONS FOR GENERATING HTML
function load_news_editor(date = '00 AAA, 0000', title = 'ERROR:', content="Invalid arguments passed to element creator jahjsdjasdhadsjahjdsajhsdh", link="www.plezbequite.com/zz/Z/zzz") {
  var lister = document.getElementById('event-manager')
  if (!lister) {
    console.warn('Failed to find element:', 'event-manager',lister)
    return
  }
  if (content.length > 53) content = content.slice(0,50) + '...'

  lister.innerHTML += `
  <div class="event-listing no-touchy">
    <div id="event-title-and-content">
      <span id="e-title" class="">${title}</span>
      <span id="e-content" class="">${content}</span>
    </div>
    <span id="e-link" class="">${link}</span>
    <span id="e-date" class="">${date}</span>
    <button id="edit">...</button>
  </div>
  `
}


function load_news(date = '00 AAA, 0000', title = 'ERROR:', content="Invalid arguments passed to element creator jahjsdjasdhadsjahjdsajhsdh") {
  var lister = document.getElementById('news-lister')
  if (!lister) {
    console.warn('Failed to find element:', 'news-lister',lister)
    return
  }
  if (content.length > 43) content = content.slice(0,40) + '...' 
  
  lister.innerHTML += `
  <div class="news-card no-touchy">
    <div id="n-date">
      <span class="h-font white">${date}</span>
    </div>
    <div id="n-text">
      <span id="n-title" class="h-font white">${title}</span>
      <span id="n-content" class="h-font white">${content}</span>
      <span id="n-press" class="h-font white">Tryck för mer information.</span>
    </div>
  </div>
  `
}