import React, { useContext,useState } from 'react'
import { users,styles } from '../../App'
import './login.css'

function Login() {

    const user = useContext(users)
   

    const ui = useContext(styles)
    const {style}=ui
   
    
    const [login , setLogin]=useState({
        email:"",
      password:""
    })

   function handleShow(){
        ui.setStyle('none')
        ui.setShow('block')
   }
    
  
  
    
  

      async function handleClick() {
       
        try{
            let respons = await fetch("https://blogs-webiste-api.onrender.com/users/signin",
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(login)
        }
         

            );
            let result= await respons.json()
            
            console.log(result);
          
            user.setIsLoggedIn(true)
            ui.setStyle('none')
            sessionStorage.setItem('user',JSON.stringify(result))

        }catch(error ){
            console.error(error.message)
        }
        
      }


  return (

    <div className='position' style={{display:`${style}`}}>
     
      
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

        <span>Ahh You Don't have any cradential? don't be rude just click on it<a href="#" onClick={handleShow}>sin up</a></span>

          </div>
        
        
        </form>
            </div>
           </div>
        
    </div>
  )
}

export default Login