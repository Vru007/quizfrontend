import React, { useEffect } from "react";
import { useState } from "react";
// import "../styles/App.css";
import {useSelector} from'react-redux';
import { useDispatch } from "react-redux";
import { useFetchQuestion } from "../hooks/FetchQuestions";
import { updateResultAction } from "../redux/result_reducer";


function Question({onChecked}) {
  const [checked, setChecked] = useState(undefined);
  const result = useSelector(state => state.result.result);
  const { trace } = useSelector(state => state.questions);
  const state=useSelector(state=>state)
  const [{isloading,apiData,serverError}]=useFetchQuestion();
  const questions = useSelector(state=>state.questions.queue[state.questions.trace]);
  const dispatch=useDispatch();
  
  
     
  useEffect(()=>{
       dispatch(updateResultAction({trace,checked}))
      //  console.log({trace,checked});
  },[checked]);
  useEffect(() => {
    // console.log(state);
    
  });
  function onSelect(i) {
    onChecked(i);
    setChecked(i);
    dispatch(updateResultAction({trace,checked}))
    // console.log(i);
  }

  if(isloading) return <h3 className="text-light">isLoading</h3>
  if(serverError) return <h3 className="text-light">{serverError || "unknown error"}</h3>
  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={()=>onSelect(i)}
            ></input>
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className={`check ${result[trace]==i? "checked":''}`}></div>
          </li>
  ))}
      </ul>
    </div>
  );
}

export default Question;
