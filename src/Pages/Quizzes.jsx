import React, { useReducer } from 'react'
import { useEffect } from 'react';
import { getQuizzes } from '../api';
import Quiz from '../Components/Quiz/Quiz'

const Quize_access = "Quize_access"
const initState = {
    quize:[]
}

  function quizReducer(state, action){
    switch(action.type){

        case Quize_access:
            return{
                ...state,
                quize: action.payload

            }; 
            default:
                return state

    }
    
  }


function Quizzes({loggedInUser}) {
    const [quizzes , dispatch]=useReducer(quizReducer,initState)
    
    
  useEffect(()=>{
    
    getQuizzes().then((data)=>{
      
        dispatch({
            type:Quize_access,
            payload: data.data
        })
    })
    
    
  },[])



  return (
    <>
    {
     <div className="grid grid-cols-1 md:grid-cols-5 mt-3 md:ml-3">
          {quizzes.quize.map((quiz) => (
            <Quiz key={quiz._id} quiz={quiz} />
          ))}
        </div>
    
    }
     
    </>
  )
}

export default Quizzes