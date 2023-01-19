import React from 'react'

const Showcolor = ({setColor}) => {
  
    const [activeColor,setActiveColor]=React.useState(null)


    const inputOnChange=(e)=>{
       const {value}=e.target
       setActiveColor(value)
       setColor(value)
   
    }
   
     return (
       <div>
           <input type="text" value={activeColor} onChange={inputOnChange} />
       </div>
     )
}

export default Showcolor
