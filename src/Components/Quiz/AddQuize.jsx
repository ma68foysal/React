import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { Link } from 'react-router-dom'
import { addQuiz } from '../../api'
import ModalView from '../../Customs/ModalView'


  


function AddQuize() {

  
  
  


  const [img,setImage]=useState('./logo192.png')
       
  const initState ={
    name: "",
    description: "",
    price: "",
    duration: "",
    answerType: "",
    image: img,
  }
  const addQuize='addQuize'
  function quizReducer(state,action){
    switch(action.type){
      case addQuize:
        return {
          ...state,
          [action.payload.name]:action.payload.value
        }
        default:
          return state
    }
  }
  const [newQuize,dispatch]=useReducer(quizReducer,initState)
       const {name,description, price,duration,answerType,image}=newQuize
  console.log(newQuize);
        
  function uploadimg (e){
    const reader = new FileReader()
    reader.onload= ()=>{
      if(reader.readyState===2){
        setImage(reader.result)
        
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const oninputChange=(e)=>{
    dispatch({
      type:addQuize,
      payload:{
        name:e.target.name,
        value:e.target.value
        
      }
    }
    )
    
  }
 function handleOnSubmit(e){
  e.preventdefault()
 }
  function hanleSubmit (){
    
    addQuiz(newQuize).then((data)=>
    {
      sessionStorage.getItem('quiz',JSON.stringify(data))
    }
    )
  }
  
  return (
    <>
    <ModalView>
        < 
        
        >
          <div className="flex items-center my-4 ">
            <p className="text-center font-bold mx-4 mb-0 ">
            Upload an interesting quiz for your visitors
            </p>
          </div>
          {/* <!-- Name input --> */}
          <div className="mb-6">
            <label className='form-label'>
            A Short Name!
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={oninputChange}
              required
              
            //   onChange={onloginState}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="What is the type or name of quiz"
            />
          </div>

          {/* <!-- Description input --> */}
          <div className="mb-6">
          <label className='form-label'>A Short Description</label>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={oninputChange}
              required
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="What would be quiz's best description, describe a short description and key point"
            />
          </div>
          {/* <!-- How much Cost? input --> */}
          <div className="mb-6">
            <label className='form-label'>
            How much Cost?
            </label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={oninputChange}
              required
              
            //   onChange={onloginState}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="What is the type or name of quiz"
            />
          </div>
          {/* <!-- time duration input --> */}
          <div className='mb-6'>
          <label>
          What would be the Quiz time duration?
         </label> 

              <select className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                as="select"
                id="answerType"
                type="text"
                name="duration"
                value={duration}
                onChange={oninputChange}
                required
              >
                <option value="">Choose Quiz Duration</option>
                <option value="quiz_based">Quiz Based</option>
                <option value="question_based">Question Based</option>
              </select>
              </div>

          <div className='mb-6'>
          <label>
                What would be the quiz answer showing option?
              </label>
              <select className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                as="select"
                id="answerType"
                type="text"
                name="answerType"
                value={answerType}
                onChange={oninputChange}
                required
              >
                <option value="">Choose Quiz Answer Option</option>
                <option value="quiz_based">Quiz Based</option>
                <option value="question_based">Question Based</option>
              </select>
              </div>
              <div className="mb-6">
            <label className='form-label'>
            What would be the quiz answer showing option?
            </label>
            <input
              type="file"
              name='image'
              accept="image/*"
              // value={image}
              onChange={uploadimg}
              
              
            //   onChange={onloginState}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="What is the type or name of quiz"
            />
          </div>
              

          <div className="text-center lg:text-left ">
            <button onClick={hanleSubmit}  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              submit
            </button>
            
          </div>
        </>
      </ModalView>
    </>
  )
}

export default AddQuize