
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
import{signInWithPhoneNumber,getAuth,signInWithPopup,RecaptchaVerifier, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAMsdDWoayAAGXFZLmAm-glD49tnH-zls",
  authDomain: "signinandup2.firebaseapp.com",
  projectId: "signinandup2",
  storageBucket: "signinandup2.appspot.com",
  messagingSenderId: "959401494595",
  appId: "1:959401494595:web:180e55c084d7eb17ceecf6",
  measurementId: "G-P6V3X6PF3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const user = auth.currentUser;
  onAuthStateChanged(auth,(user)=>{
if (!user){
   location.replace("maintainers.html");
  
 
  
}
else{




}
});
  logout.addEventListener('click',(e)=>{

    signOut(auth).then(() => {
  // Sign-out successful.
  alert('user logged out');
}).catch((error) => {
  // An error happened.
//   const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
});

});
 
 



