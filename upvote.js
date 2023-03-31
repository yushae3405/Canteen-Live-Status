


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore,collection, addDoc,getDocs,doc,setDoc} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { getDatabase ,set,ref,get,child ,update} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";


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


  const app = initializeApp(firebaseConfig);
 





  const db = getFirestore(app);
  const auth = getAuth(app);

const user = auth.currentUser;
  

document.getElementById("pop-menu").addEventListener("click",()=>{
    document.getElementById("getpop").classList.remove('popup-canteen');
    document.getElementById("getpop").classList.add('openPopUp');

})
document.getElementById("getpop-c").addEventListener("click",()=>{
    document.getElementById("getpop").classList.add('popup-canteen');
    document.getElementById("getpop").classList.remove('openPopUp');

})
 
document.getElementById("pop-menu2").addEventListener("click",()=>{
    document.getElementById("getpop2").classList.remove('popup-canteen');
    document.getElementById("getpop2").classList.add('openPopUp');

})
document.getElementById("getpop2-c").addEventListener("click",()=>{
    document.getElementById("getpop2").classList.add('popup-canteen');
    document.getElementById("getpop2").classList.remove('openPopUp');

})


document.getElementById("pop-menu3").addEventListener("click",()=>{
    document.getElementById("getpop3").classList.remove('popup-canteen');
    document.getElementById("getpop3").classList.add('openPopUp');

})
document.getElementById("getpop3-c").addEventListener("click",()=>{
    document.getElementById("getpop3").classList.add('popup-canteen');
    document.getElementById("getpop3").classList.remove('openPopUp');

})

document.getElementById("pop-menu4").addEventListener("click",()=>{
    document.getElementById("getpop4").classList.remove('popup-canteen');
    document.getElementById("getpop4").classList.add('openPopUp');

})
document.getElementById("getpop4-c").addEventListener("click",()=>{
    document.getElementById("getpop4").classList.add('popup-canteen');
    document.getElementById("getpop4").classList.remove('openPopUp');

})


document.getElementById("pop-menu5").addEventListener("click",()=>{
    document.getElementById("getpop5").classList.remove('popup-canteen');
    document.getElementById("getpop5").classList.add('openPopUp');

})
document.getElementById("getpop5-c").addEventListener("click",()=>{
    document.getElementById("getpop5").classList.add('popup-canteen');
    document.getElementById("getpop5").classList.remove('openPopUp');

})


document.getElementById("pop-menu6").addEventListener("click",()=>{
    document.getElementById("getpop6").classList.remove('popup-canteen');
    document.getElementById("getpop6").classList.add('openPopUp');

})
document.getElementById("getpop6-c").addEventListener("click",()=>{
    document.getElementById("getpop6").classList.add('popup-canteen');
    document.getElementById("getpop6").classList.remove('openPopUp');

})       

 


