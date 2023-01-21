import React, { useReducer } from 'react'
import { Link } from 'react-router-dom';
import { loginUser } from '../../api';
import ModalView from "../../Customs/ModalView";



 

 const init = {
    email: "",
   password: "",

 }
 let loginState= "Login";

 function userReducer(state , action){
     switch(action.type){
    case loginState:
        return {
      ...state,
      [action.payload.name]: action.payload.value
         }
     default:
        return state
    }
    
 }

 function Login() {
    const [LoggedIn, dispatch]=useReducer(userReducer,init)
       
    function handleOnSubmit (e){
        e.preventDefault();
      dispatch(
        loginUser(LoggedIn)
      .then((data)=>{
        
        sessionStorage.setItem("user",JSON.stringify(data))
      }))
    }

    
    function onloginState(e){
        dispatch({
            type:loginState,
            payload:{
            name:e.target.name,
            value : e.target.value}
        }

        )
    }

  return (
    <>
    <ModalView>
        <form onSubmit={handleOnSubmit}>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0 ">
              Login an account
            </p>
          </div>
          {/* <!-- Email input --> */}
          <div className="mb-6">
            <input
              type="email"
              name="email"
              required
              //   value={email}
              onChange={onloginState}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="mb-6">
            <input
              type="password"
              name="password"
              required
              //   value={password}
              onChange={onloginState}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>

          <div className="text-center lg:text-left ">
            <button className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Login
            </button>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?{" "}
              <Link
                to="/register"
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

export default Login