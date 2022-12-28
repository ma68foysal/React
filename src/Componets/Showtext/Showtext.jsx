import React, { useState } from 'react'

function Showtext() {
   

    const [isShow, setIsShow] =React.useState(false)
    function handleClick(){
        setIsShow(!isShow)

    }
  return (
    <>
    <h1>Welcome</h1>

    <button onClick={handleClick}>{!isShow ?'Show More':'Less More'}</button>

   {
   isShow && (
   
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique nemo hic voluptas tempora quas aliquid neque cumque fugit, quos harum nobis. Earum doloribus commodi et harum quaerat, ullam aspernatur!</p>
  )
    

   } 
    
    </>
  )
}

export default Showtext