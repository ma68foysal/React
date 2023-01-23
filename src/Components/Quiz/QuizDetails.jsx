import React from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { get_Quiz_by_id } from '../../api'
import classes from '../../Styles/QuizDetails.module.css'

    
    const Get_Quiz_By_Id = 'Get_Quiz_By_Id'

    const initState = {
        quize:{}
    }

   function quizReducer(state,action){
    switch(action.type){
        case Get_Quiz_By_Id:
        return{
            ...state,
            quize:action.payload

        }
        default:
            return state
    }
   }


function QuizDetails() {
    
    const [singleQuiz, dispatch]=useReducer(quizReducer,initState)
    const {quize}=singleQuiz
    const {id}=useParams()
    const navigate =useNavigate()

   const duration_type = singleQuiz.quize.duration === "question_based";
   const answer_type = singleQuiz.quize.answerType === "question_based";

    useEffect(()=>{
        get_Quiz_by_id(id).then((data)=>{
            dispatch({
                type:Get_Quiz_By_Id,
                payload:data.data
            })
        })
    },[]
    )
    function startQuiz(){
        navigate('/play/quiz')
        localStorage.setItem('quiz', JSON.stringify({...quize}))
    }
  return (
    <>
    <div className=" min-h-full grid place-items-center font-mono bg-white">
        <div className="flex justify-center my-5">
          {/* {admin && <AddQuestion quizId={quiz._id} />}{" "} */}
        </div>
        <div className="rounded-md bg-gray-800 shadow-lg my-3">
          <div className="md:flex px-4 leading-none max-w-4xl">
            <div className="flex-none ">
              <img
                src={singleQuiz?.quize.image?.url}
                alt={singleQuiz.quize.name}
                className="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
              />
            </div>

            <div className="flex-col text-gray-300">
              <p className="pt-4 text-2xl font-bold px-4">{singleQuiz.quize.name}</p>
              <hr className={classes.hr_text} data-content="" />
              <div className="text-md flex justify-between px-4 my-2">
                <span className="font-bold">{singleQuiz.quize.description}</span>
                <span className="font-bold border px-2 py-2">
                  ${singleQuiz.quize.price}
                </span>
              </div>
              <p className="hidden md:block px-4 my-4 text-sm text-left">
                {singleQuiz.quize.name} has{" "}
                {singleQuiz?.quize.questions?.length ? singleQuiz?.quize.questions?.length : "no"}{" "}
                questions, This quiz will demonstrate your answer{" "}
                {answer_type ? "Before the Next" : "After Submit"} and the time
                will be {duration_type ? "2 MIN" : "4OMIN"}. Please be careful{" "}
                {answer_type
                  ? "you will get 2 MIN for each question, once if you miss the time then automatically it will show your answer and missed answer will not count for your result."
                  : "you will get 40 MIN for whole questions, and if you miss the time after 40 MIN automatically it will show your result and your missed answer will not count for your result."}
              </p>

              <p className="flex text-md px-4 my-3">
                Rating: {answer_type ? "9.0" : "4.5"}
                <span className="font-bold px-2">|</span>
                Mood: Dark
              </p>

              <div className="text-xs md:flex px-4">
                <span
                  type="button"
                  className="border uppercase border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline"
                >
                  {singleQuiz?.quize.questions?.length} Questions
                </span>
                <span
                  type="button"
                  className="border uppercase border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline"
                >
                  {singleQuiz.quize.answerType}
                </span>

                <span
                  type="button"
                  className="border uppercase border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline"
                >
                  {singleQuiz.quize.duration}
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={startQuiz}
                className="bg-black text-white w-auto rounded-md px-2 py-2 my-3"
              >
                start
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuizDetails