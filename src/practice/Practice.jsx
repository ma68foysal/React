import React from 'react'
import { useState } from 'react'

function Practice() {
   

    const [img , setImg]=useState(null)
    const [imgt , setImgt]=useState(null)

    function addtimg(){
        setImgt(img)
    }
       
    function handleChange(e){
        const reader = new FileReader()
        reader.onload=()=>{
            if(reader.readyState ===2){
                addImg(reader)
            }
        }
        reader.readAsDataURL(e.target.files[0])

    }

    function addImg(p){
        
        setImg(p.result)
    }
  return (
    <>
    <input type="file" accept='image/*' id='file' onChange={handleChange} />
    <button onClick={addtimg}>add</button>
    <img src={imgt} alt="" />
    </>
  )
}

export default Practice