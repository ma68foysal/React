import React, { useContext, useState } from 'react'
import { users } from '../../context/Context.jsx'
import './adpost.css'

function AddPost() {
    const user = useContext(users)
    const {visitor}=user

    const [newPost , setNewPost]=useState({
        title: "",
        content:"",
          date:"",
        
      })


      async function AddNewPost() {
        try{
            const respons = await fetch("https://blogs-webiste-api.onrender.com/post",
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify(newPost)  

        }
         

            );
            const result= await respons.json()
            console.log(result);          
           
        }catch(error ){
            console.error(error.message)
        }
        
      }

  return (
    <div > 
        {
            visitor && (
                <div  className='card m-auto'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className="col-lg-12">

                <label >Title</label>
                <input type="text" className='form-control' onChange={(e)=>
                setNewPost({
                ...newPost,
                title: e.target.value
                })}/>
                <label >content</label>
                <input type="text" className='form-control' onChange={(e)=>
                setNewPost({
                ...newPost,
                content:e.target.value
                    })}/>
                <label >date</label>
                <input type="date" className='form-control' onChange={(e)=>
                setNewPost(
                { ...newPost,
                date:e.target.value
                })}  />


                    <button onClick={AddNewPost} className='login_btn w-100'>Add Post</button>

                    {/* <span>Ahh You Don't have any cradential? don't be rude just click on it<a href="#">sin up</a></span> */}

                            
                            </div>
                    </div>
                </div>
            </div>)
            
        }
      
     
  </div>
  )
}

export default AddPost