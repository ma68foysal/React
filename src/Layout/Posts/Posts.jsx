import React, { useContext, useEffect, useState } from 'react'
import { users } from '../../context/Context'
import styles from './posts.module.css'

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
        user?.visitor &&(
          post.map((posts,i)=>(
       
            <div className={styles.wrapper} key={i}>
              <div className={styles.card}>
                <div className={styles.card_banner}>
                  <p className={`${styles.category_tag} ${styles.popular}`}>Blog</p>
                  <img
                    className={styles.banner_img}
                    src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="blog"
                  />
                </div>
                <div className={styles.card_body}>
                  <p className={styles.blog_hashtag}>
                    #{posts?.author?.name} #{posts?.date}
                  </p>
                  <h2 className={styles.blog_title}>{posts?.title}</h2>
                  <p className={styles.blog_description}>{posts?.content}</p>
                </div>
              </div>
            </div>
        )
       
        
       ))
       }
       
       
        
          
        
       
    </div>
  )
}

export default Posts