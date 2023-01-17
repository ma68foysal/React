import React, { useContext,useState } from 'react'
import { styles } from '../Context'

function StyleProvider({children}) {
    

    const [style,setStyle]=useState('none')
    const [show,setShow]=useState('none')
   
     
    const stylesValue={
      style:style,
      setStyle:setStyle,
      show:show,
      setShow:setShow
  
    }
  return (
    <styles.Provider value={stylesValue}>
    {children}
    </styles.Provider>
  )
}

export default StyleProvider