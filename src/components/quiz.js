import React, { useEffect, useState } from "react";
import Question from "./Question";

/* redux store import*/
import {useSelector} from'react-redux';
import {MoveNextQuestion, MovePrevQuestion} from"../hooks/FetchQuestions";
import {AnswersArray} from"../hooks/FetchAnswers";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
function Quiz(){
    
    const dispatch=useDispatch();
    const [check,setcheck]=useState(undefined);
    const result = useSelector((state)=>(state.result.result));
    const { queue, trace } = useSelector(state => state.questions);
     
    // useEffect(()=>{
    //     //  console.log(result);
        
    // });

    function onPrev(){
        if(trace>0){
        dispatch(MovePrevQuestion());
        
        }
    }
    function onNext(){
        if(trace < queue.length){
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            /** insert a new result in the array.  */
            if(result.length <= trace){
                dispatch(AnswersArray(check))
            }
    }
    setcheck(undefined)     
}
    function onChecked(check){
        setcheck(check);
        // console.log(check);
    }

    /* After Exam is Over*/
    if(result.length && result.length>=queue.length){   
        return <Navigate to="/result" replace="true"></Navigate>
    }


    return(
        <div className="container">
               <h1 className="title text-light">Quiz Application</h1>

      {/*display questions*/}
      <Question onChecked={onChecked}/>

      <div className="grid">
      {trace>0 ? <button className="btn prev" onClick={onPrev}>Prev</button>:<div></div>}
      <button className="btn next" onClick={onNext}>Next</button>
      </div>
             </div>
    
    )
}
export default Quiz;