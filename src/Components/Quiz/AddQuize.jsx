import React from 'react'
import { Link } from 'react-router-dom'
import ModalView from '../../Customs/ModalView'


function AddQuize() {
  return (
    <>
    <ModalView>
        <form 
        // onSubmit={handleOnSubmit}
        >
          <div className="flex items-center my-4 ">
            <p className="text-center font-bold mx-4 mb-0 ">
            Upload an interesting quiz for your visitors
            </p>
          </div>
          {/* <!-- Email input --> */}
          <div className="mb-6">
            <label className='form-label'>
            A Short Name!
            </label>
            <input
              type="text"
            
              
              required
              
            //   onChange={onloginState}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="What is the type or name of quiz"
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="mb-6">
          
          <label className='form-label'>A Short Description</label>
            <textarea
              type="text"
              required
              //   value={password}
            //   onChange={onloginState}
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
            
              required
              
            //   onChange={onloginState}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="What is the type or name of quiz"
            />
          </div>
          <div className='mb-6'>
          <label>
          What would be the Quiz time duration?
         </label> 

              <select className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                as="select"
                id="answerType"
                type="text"
                name="answerType"
                // value={answerType}
                // onChange={onInputChange}
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
                // value={answerType}
                // onChange={onInputChange}
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
              accept='image/*'
            
              required
              
            //   onChange={onloginState}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="What is the type or name of quiz"
            />
          </div>
              

          <div className="text-center lg:text-left ">
            <button  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Login
            </button>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?{" "}
              <Link
                to=""
                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </ModalView>
    </>
  )
}

export default AddQuize