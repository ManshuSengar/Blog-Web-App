import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, firestore } from "./firebase";
import {useEffect} from "react"

function Home(props) {
    // useEffect(()=>{
    //   let temparr=[];
    //   let unsubcription= firestore.collection("posts").onSnapshot((querySnapshot)=>{
    //      querySnapshot.docs.map((doc)=>{
    //       // console.log(doc.data());
    //       temparr.push({
    //         data:doc.data(),
    //         id:doc.id
    //       })                  
    //     }
    //   );
    //   })
    //   props.setTextApp(temparr);
    //   return()=>{
    //     unsubcription();
    //   }
     
    // },[])
  return (
    <div className="home-conatiner">
      <div className="homebtn">
        <Link to="/">
          <button type="button">Home</button>
        </Link>
        <Link to="/login">
          <button onClick={()=>{
            auth.signOut();
          }} type="button">Logout</button>
        </Link>
        <Link to="/post">
          <button type="button">Posts</button>
        </Link>
      </div>
      <div className="postdiv">
          {props.textApp.map((e)=>
               <div className="post-block">
                 <p>{e.data.Body}</p>
                 </div>   
          )}
      </div>
    </div>
  );
}
export default Home;
