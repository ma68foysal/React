import React, { useContext, useEffect, useState } from 'react'
import { users } from '../../App'

function Posts() {
  const user = useContext(users)

  const [post,setPost]=useState([])

 

  useEffect(()=> {
    fetch('https://blogs-webiste-api.onrender.com/post')
    .then((res) => res.json())
    .then((data)=>setPost(data))
    .catch((error)=>console.log(error))

  },[])
    
  

  return (
    <div>
       {
        user.isLoggedIn && post.map((posts) => 

          <h1>
            {posts.title}
          </h1>
        )
       }
    </div>
  )
}

export default Posts