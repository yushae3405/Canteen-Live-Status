
 
 
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
  import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
  import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
  import { getDatabase,ref,onValue,set } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

   const database = getDatabase();
  import app from "./firebase.js";
  
  
  
 
const analytics = getAnalytics(app);
const auth = getAuth(app);


onAuthStateChanged(auth,(user)=>{
    if (user){
        location.replace("welcome.html");

    }
    
})

function login1(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth =getAuth(app);
    
  

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}



