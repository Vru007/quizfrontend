import React, { useRef } from "react";
import { Link } from "react-router-dom";
import"../styles/home.css";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";
function Home(){
    
  const inputRef=useRef(null);
  const dispatch=useDispatch();
  function startQuiz(){
    if(inputRef.current?.value){
       dispatch(setUserId(inputRef.current?.value))
    }
    else{
      throw new Error("please enter your name");
    }
  }
    
    return(
        
        <div className="container">
          <h1 className='title text-light'>Quiz Application</h1>
           
          <ol>
          <li>You will be asked 10 questions</li>
          <li>All Questions carry 1 mark</li>
          <li>Result will be displayed after completion of the quiz</li>
          </ol>
        
          <form id='form'>
            <input className="userid" style={{width:"80%",height:"10"}} ref={inputRef} type="text" placeholder="Username"></input>
          </form>
          <div className="start">
           <Link className="btn" to={'quiz'} onClick={startQuiz}>Start</Link>
          </div>


        </div>
    )
}
export default Home;