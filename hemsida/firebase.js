// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
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

// LOADING NEWS FROM FB
// Get a list of news from your database
async function getNews(db) {
  const newsCol = collection(db, 'news');
  const newsSnapshot = await getDocs(newsCol);
  const newsList = newsSnapshot.docs.map(doc => doc.data());
  return newsList;
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

window.addEventListener('load', function () {
  loadNews()
  loadNewsEditor()
})






function create_span(id, c, content) {
  var n_span = document.createElement('span')
  n_span.setAttribute('id',id)
  n_span.setAttribute('class',c)
  n_span.textContent = content
  return n_span
}

function load_news_editor(date = '00 AAA, 0000', title = 'ERROR:', content="Invalid arguments passed to element creator jahjsdjasdhadsjahjdsajhsdh", link="www.plezbequite.com/zz/Z/zzz") {
  var lister = document.getElementById('event-manager')
  if (!lister) return

  var n = document.createElement('div')
  n.setAttribute('class', 'event-listing no-touchy')
  var n_title_content = document.createElement('div')
  n_title_content.setAttribute('id', 'event-title-and-content')
  n_title_content.appendChild(create_span('e-title','',title))
  n_title_content.appendChild(create_span('e-content','',content.slice(0,52) + '...'))
  n.appendChild(n_title_content)
  n.appendChild(create_span('e-link','',link))
  n.appendChild(create_span('e-date','',date))
  var n_btn = document.createElement('button')
  n_btn.setAttribute('id', 'edit')
  n_btn.textContent = '...'
  n.appendChild(n_btn)

  lister.appendChild(n)
}


function load_news(date = '00 AAA, 0000', title = 'ERROR:', content="Invalid arguments passed to element creator jahjsdjasdhadsjahjdsajhsdh") {
  var lister = document.getElementById('news-lister')
  if (!lister) return

  var n = document.createElement('div')
  // DATE SECTION
  n.setAttribute('class','news-card no-touchy')
  // n.setAttribute('id','n2')
  var n_date = document.createElement('div')
  n_date.setAttribute('id', 'n-date')
  var n_span = document.createElement('span')
  n_span.setAttribute('class', 'h-font white')
  n_span.textContent = date
  n_date.appendChild(n_span)

  // TEXT SECTION
  var n_text = document.createElement('div')
  n_text.setAttribute('id','n-text')
  n_span = document.createElement('span')
  n_text.appendChild(create_span('n-title', 'h-font white', title))
  n_text.appendChild(create_span('n-content', 'h-font white', content.slice(0,40) + '...'))
  n_text.appendChild(create_span('n-press', 'h-font white', 'Tryck för mer information.'))
  n_text.appendChild(n_span)

  n.appendChild(n_date)
  n.appendChild(n_text)
  
  lister.appendChild(n)
}