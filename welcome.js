import app from "./firebase.js";
import { getAuth,onAuthStateChanged,sendEmailVerification,signOut} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const auth = getAuth(app);
onAuthStateChanged(auth,(user)=>{
    if (!user){
        location.replace("index1.html");
       // console.log('no user logged in');
    }
    else{
        
    }

})





