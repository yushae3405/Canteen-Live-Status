import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore , collection , addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
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
 
 
 
 
 const form2 = document.getElementById('Query');
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    const docRef = addDoc(collection(db, "Query"), {
      Username: form2.Username.value,
      Email:form2.Email.value,
      Phone_no:form2.Phone_no.value,
      query: form2.query.value
      
    });
    form2.Username.value = '';
    form2.Email.value ='';
    form2.Phone_no.value ='';
    form2.query.value = '';
    
  });

  
