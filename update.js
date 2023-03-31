import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore,collection, addDoc,doc,setDoc} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
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
  



// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const form = document.getElementById('addcanteen');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // const docRef = addDoc(collection(db, "addcanteen"),{
      // nameofcanteen:form.nameofcanteen.value,
      // url:form.url.value,     
      // description:form.description.value,
      // statussss:form.statussss.value
      
    // });
    setDoc(doc(db, "addcanteen",form.nameofcanteen.value), {
      nameofcanteen:form.nameofcanteen.value,
      url:form.url.value,     
      description:form.description.value,
      statussss:form.statussss.value
    });
    form.nameofcanteen.value ='';
    form.url.value ='';   
    form.description.value ='';
    form.statussss.value ='';
   
      
  


    
  });

  
