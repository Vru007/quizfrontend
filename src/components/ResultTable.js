import React, { useEffect, useState } from "react";
import {useSelector} from'react-redux';

import { getServerData } from "../helper/helper";
export default function ResultTable(){
  
 
  const [data,setData]=useState([]);
  useEffect(()=>{
    getServerData('https://dull-lime-cheetah-yoke.cyclic.cloud/api/questions/api/results',(res)=>{
      setData(res);
    })
  },[])
  console.log(data);
  return(

    

        <div>
          <table>
            <thead className="table-header">
              <tr className="table-row">
                <td>Name</td>
                <td>Attempts</td>
                <td>Earn Points</td>
                <td>Result</td>
              </tr>
            </thead>
            <tbody>
            {!data ?? <div>No Data Found</div>}
            {
              data.map((item,index)=>(
                
                <tr className="table-body" key={index}>
                <td>{item.username}</td>
                <td>{item.attempts}</td>
                <td>{item.points}</td>
                <td>{item.achived}</td>
              </tr>
            
              ))
             
          
          }
         
            </tbody>
          </table>
        </div>
    )
}