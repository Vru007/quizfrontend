import { useEffect, useState } from "react";
import data, {answers}from "../database/data";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getServerData } from "../helper/helper";
/* redux actions*/

import * as Action from "../redux/question_reducer";
/* fecth questions hook*/
export const useFetchQuestion=()=>{
    
    const dispatch=useDispatch();
    const [getData,setGetData]=useState({isloading:false,apiData:[],serverError:null})
   

   useEffect(()=>{
    
    
   
 
    
    setGetData(prev=>({...prev,isloading:true}));
    
    (async()=>{
            
    //   axios.get('http://localhost:5000/api/questions')
    // .then((res)=>{
  
    //   let data=res.data;
    //   let question=data[0].questions;
    //   let answers=data[0].answers;
      
      
        try{
             
            //  let question=await data;
          const [{questions,answers}]=  await getServerData('https://dull-lime-cheetah-yoke.cyclic.cloud/api/questions',(data)=>data)
          // console.log({questions,answers});
            //  console.log(question);
             if(questions.length>0){
             setGetData(prev=>({...prev,isloading:false,apiData:{questions,answers}}))
        
             /* Dispatch*/
             dispatch(Action.startExamAction({question:questions,answers}));
            }
            else{
                throw new Error("No question there")
            }
    }
        catch(err){
            setGetData(prev=>({...prev,isloading:false,serverError:err}))
        }
      // })
    })();

},[dispatch]);

return[getData,setGetData];


}

export const MoveNextQuestion=()=>async(dispatch)=>{
  try{
        dispatch(Action.moveNextQuestion());
  }
  catch(err){
    console.log(err)
  }
 
}

export const MovePrevQuestion=()=>async(dispatch)=>{ 
   try{
     dispatch(Action.movePrevQuestion());
   }
   catch(err){
     console.log(err)
   }
}
