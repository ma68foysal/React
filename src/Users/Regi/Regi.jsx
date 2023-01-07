
import React, { useContext, useState } from 'react'
import { users,styles } from '../../App'
import '../Login/login.css'

function Regi() {
    const user = useContext(users)

    const ui = useContext(styles)
    const {show}=ui
   
    
    const [register , setResigster]=useState({
      firstName: "",
      lastName:"",
        email:"",
      password:"",
      confirmPassword:""
    })
    
    
  
    
      async function handleClick() {
        try{
            const respons = await fetch("https://blogs-webiste-api.onrender.com/users/signup",
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify(register)  

        }
         

            );
            const result= await respons.json()
            console.log(result);          
            user.setIsLoggedIn(true)

            ui.setShow('none')

            sessionStorage.setItem('user',JSON.stringify(result))

        }catch(error ){
            console.error(error.message)
        }
        
      }




  return (
    <div>
          <div className='position' style={{display:`${show}`}}> 
     
      
     <div className="card m-auto">
      <div className="card-body">
       <p className="card-text">Create a New Account</p>

       <form className='row'>
         <div className="col-lg-12">

         <label >First Name</label>
       <input type="text" className='form-control' onChange={(e)=>
       setResigster({
        ...register,
        firstName: e.target.value
       })
      }  />
         <label >Last Name</label>
       <input type="text" className='form-control' onChange={(e)=>
       setResigster({
        ...register,
        lastName:e.target.value
       })
      }  />
         <label >Email</label>
       <input type="email" className='form-control' onChange={(e)=>setResigster(
       { ...register,
           email:e.target.value
       })}  />
       <label>Password</label>
       <input type="password" className='form-control' onChange={(e)=>setResigster(
       { ...register,
           password:e.target.value
       })}  />
       <label>Confirm Password</label>
       <input type="Confirmpassword" className='form-control' onChange={(e)=>setResigster(
       { ...register,
        confirmPassword:e.target.value
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