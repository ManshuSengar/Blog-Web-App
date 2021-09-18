import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { firestore } from "./firebase";

function Posts(props) {
  
  // let [input, setInput] = useState([]);
  let [click,setClick]=useState(0);
  let [text,setText] = useState();
  useEffect(()=>{
  
   firestore.collection("posts").onSnapshot((querySnapshot)=>{
     let temparr=[];
       querySnapshot.docs.map((doc)=>{
        // console.log(doc.data());
        temparr.push({
          data:doc.data(),
          id:doc.id
        })                  
      }
    );
    props.setTextApp(temparr);
    })
    
  
  
   
  },[])
  
  return (
    <>
    {/* {console.log(props.textApp)} */}
      <div className="posts">
        <textarea
          className="textarea"
          value={text}
          onChange={(el) => {
            setText(el.currentTarget.value)
          }}
        ></textarea>
      
         <div className="postbtn">
          <button
            type="submit"
            onClick={(e) => {
            firestore.collection("posts").add({Body:text})
              setText("");
            }}
          >
            Post 
          </button> 
         </div>
         {/* // Home button   */}
         <div className="home-btn">
           <Link to="/"> <button
          >
          Home
          </button> </Link>
         
         </div>
         {/* end */}
       </div>
    </>
  );
}
export default Posts;
