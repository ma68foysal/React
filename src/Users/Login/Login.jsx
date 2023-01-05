import React, { useContext, useState } from 'react'
import { users } from '../../App'
import './login.css'

function Login() {
    const user = useContext(users)
    const [login , setLogin]=useState({
        email:"",
      password:""
    })
    
    // const loginInfo={
    //     
    // }
    
      async function handleClick(params) {
        try{
            const respons = await fetch("https://blogs-webiste-api.onrender.com/users/signin",
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify(login)  

        }
         

            );
            const result= await respons.json()
            console.log(result);
            user.setIsLoggedIn(true)

            sessionStorage.setItem('user',JSON.stringify(result))

        }catch(error ){
            console.error(error.message)
        }
        
      }


  return (
    <div style={{display:'none'}}>
     
      
      <div className="card m-auto">
       <div className="card-body">
        <p className="card-text">Don't Worry JustLogin</p>

        <form className='row'>
          <div className="col-lg-12">
          <label >Email</label>
        <input type="email" className='form-control' onChange={(e)=>setLogin(
        { ...login,
            email:e.target.value
        })}  />
        <label>Password</label>
        <input type="password" className='form-control' onChange={(e)=>setLogin(
        { ...login,
            password:e.target.value
        })}  />
        <button onClick={handleClick} className='login_btn w-100'>Login</button>

          </div>
        
        
        </form>
            </div>
           </div>
        
    </div>
  )
}

export default Login