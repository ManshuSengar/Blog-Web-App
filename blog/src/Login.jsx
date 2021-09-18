import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { auth, signInWithGoogle } from "./firebase";

function Login(props){
let [user,setUser]=useState(null);
useEffect(()=>{
    auth.onAuthStateChanged((usersign)=>{
        if(user==null){
            setUser(usersign);
        }    
    })
},[])
    
     return(
         <>
         { user?<Redirect to="/"/>:""}
         <div className="loginBtn">
             <button 
             onClick={signInWithGoogle} type="submit">Login With Google</button>
             
         </div>
         </>
     );
}
export default Login;