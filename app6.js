

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
  

 
  const form5 = document.getElementById('comments5');
form5.addEventListener('submit', (e) => {
    e.preventDefault();
    const docRef = addDoc(collection(db, "Canteen5 Comments"), {
      name: form5.name.value,
      comment: form5.comment.value
      
    });
    form5.name.value = '';
    form5.comment.value = '';
    
  });
  