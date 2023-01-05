
import React, { useContext, useState } from 'react'
import { users,styles } from '../../App'
import '../Login/login.css'

function Regi() {
    const user = useContext(users)

    const ui = useContext(styles)
    const {show}=ui
   
    
    const [login , setLogin]=useState({
        email:"",
      password:""
    })
    
    
  
    
      async function handleClick() {
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
          
            user.setIsLoggedIn(true)

            

            sessionStorage.setItem('user',JSON.stringify(result))

        }catch(error ){
            console.error(error.message)
        }
        
      }



  return (
    <div>
          <div style={{display:`${show}`}}> 
     
      
     <div className="card m-auto">
      <div className="card-body">
       <p className="card-text">Create a New Account</p>

       <form className='row'>
         <div className="col-lg-12">

         <label >Name</label>
       <input type="text" className='form-control'   />
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

       <button onClick={handleClick} className='login_btn w-100'>Register</button>

       {/* <span>Ahh You Don't have any cradential? don't be rude just click on it<a href="#">sin up</a></span> */}

         </div>
       
       
       </form>
           </div>
          </div>
       
   </div>
    </div>
  )
}

export default Regi