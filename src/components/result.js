import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/result.css";
import answers from"../database/data";
import ResultTable from "./ResultTable";
import { useDispatch } from "react-redux";
import {useSelector} from'react-redux';
import { resetResult } from "../redux/result_reducer";
import { resetQuestions } from "../redux/question_reducer";
import { usePublishResult } from "../hooks/FetchAnswers";
import { useState } from "react";
import { getServerData } from "../helper/helper";
import axios from"axios";
function Result() {
  const dispatch = useDispatch();
  const state=useSelector(state=>state);
  const username=state.result.userId;
  const totalPoints=state.questions.queue.length*10;
  const totalQuestion=totalPoints/10;
  const result=useSelector(state=>state.result.result);
  const answers=useSelector(state=>state.questions.answers);
  var count=0;
  var rightAns=0;
 var status="";

  for(var i=0;i<totalQuestion;i++){
       if(result[i]!=undefined){
        count+=1;
       }
  }
  
  for(var i=0;i<totalQuestion;i++){
       if(result[i]==answers[i]){
           rightAns+=1;
       }
  }
  const PointsEarned=rightAns*10;
  
// const [status,setStatus]=useEffect('');
  if(PointsEarned<30){
     
   status="failed"
  }
  else{
    status="pass";
  }
  

  usePublishResult({result,username:username,attempts:count,points:PointsEarned,achived:status},[])
  function onRestart() {
    dispatch(resetResult());
    dispatch(resetQuestions());
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz application</h1>
      <div className="result flex-center" >
        <div className="flex">
          <span>Username</span>
          <span className="bold">{username}</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points:</span>
          <span className="bold">{totalPoints}</span>
        </div>
        <div className="flex">
          <span>Total Questions:</span>
          <span className="bold">{totalQuestion}</span>
        </div>
        <div className="flex">
          <span>Total Attempts:</span>
          <span className="bold">{count}</span>
        </div>
        <div className="flex">
          <span>Total Points Earned</span>
          <span className="bold">{PointsEarned}</span>
        </div>
      
      <div className="flex">
        <span>Status:</span>
        <span className="bold" style={{color:`${status=="pass"? "#2aff95":"#ff2a66"}`}}>{status}</span>
      </div>
      </div>
      <div className="start" >
        <Link className="btn"to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>
      <div className="container">
       <ResultTable></ResultTable>
      </div>
    </div>
  );
}
export default Result;
