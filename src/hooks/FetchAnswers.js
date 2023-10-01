
import * as Action from "../redux/result_reducer";
import { postServerData } from "../helper/helper";
import { useCallback } from "react";
export const AnswersArray=(result)=> async(dispatch)=>{
    try{
         await dispatch(Action.pushResult(result))
    }
    catch(err){
        console.log(err);
    }
}

// export const updateResult=(index)=>async(dispatch)=>{
//     try{

//       dispatch(Action.updateResultAction(index))  
//     }
//     catch(err){
//         console.log(err);
//     }
// }

export const usePublishResult =(resultData)=>{
  
    const{result,username}=resultData;
    (async ()=>{
        try{
              if(username==null)throw new Error("Please provide a username");
            await postServerData('https://dull-lime-cheetah-yoke.cyclic.cloud/api/results',resultData,(data)=>data)
            }
        catch(err){
            console.log(err);
        }
    })();
}