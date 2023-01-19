import React from 'react'

function HomeworkTwo() {
    const [position,setPosition]= React.useState({
        x:0,
        y:0,
    })

  return (
    <div style={{
        width:'100%',
        height:'100vh', 
        position:"reletive",
        Transition:'0.5s'
        

    }}
     onPointerMove={(e)=>setPosition({
        x:e.clientX,
        y:e.clientY
        
     })}>

        <div style={{
        width:'10px',
        height:'10px', 
        backgroundColor:'red',
        position:'absolute',
        borderRadius:'50px',
        top:'10px',
        left:'10px',
        transform: `translate(${position.x}px , ${position.y}px)`
        
        

    }}>
        Please Don't Move
    </div>
       
     </div>
  )
}

export default HomeworkTwo