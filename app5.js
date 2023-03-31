// const form = document.getElementById('comments');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('comments').add({
//        name: form.name.value,
//        comment: form.comment.value
//     });
//     form.name.value = '';
//     form.comment.value = '';
// });

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCCqsEqT_0H3wXexOmlS9CmFNy4OmJy9hk",
    authDomain: "canteen-live-status-77290.firebaseapp.com",
    databaseURL: "https://canteen-live-status-77290-default-rtdb.firebaseio.com",
    projectId: "canteen-live-status-77290",
    storageBucket: "canteen-live-status-77290.appspot.com",
    messagingSenderId: "615011554452",
    appId: "1:615011554452:web:060c60f24a85b3fff89081",
    measurementId: "G-Y6Q0M80LNX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase



// Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  

  const form4 = document.getElementById('comments4');
form4.addEventListener('submit', (e) => {
    e.preventDefault();
    const docRef = addDoc(collection(db, "Canteen4 Comments"), {
      name: form4.name.value,
      comment: form4.comment.value
      
    });
    form4.name.value = '';
    form4.comment.value = '';
    
  });
  function refreshPage(){
    window.location.reload();
}

 