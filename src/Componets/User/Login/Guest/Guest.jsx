import React from 'react'


export default function Guest({massage}) {
    const handleButton= ()=>{
        console.log(massage);
        
        

    }
  return (
    <div>
        <h1></h1>
        <button onClick={handleButton}>click</button>
       
    </div>
  )
}
