import { createSlice } from "@reduxjs/toolkit"
export const questionReducer=createSlice({

    name:'questions',
    initialState:{
        queue:[],
        answers:[],
        trace:0
    },

    reducers:{
        startExamAction:(state,action)=>{
            let {question,answers}=action.payload
            return{
                ...state,
                queue:question,
                answers:answers
            }
        },
        moveNextQuestion:(state)=>{
                return{ 
                    ...state,
                    trace:state.trace+1
    }},
    movePrevQuestion:(state)=>{
        return{
          ...state,
            trace:state.trace-1
        }},

    resetQuestions:()=>{
         return{
            queue:[],
            answers:[],
            trace:0
         }
    },
    }
})

export const {startExamAction, moveNextQuestion,movePrevQuestion,resetQuestions}=questionReducer.actions;
export default questionReducer.reducer;
