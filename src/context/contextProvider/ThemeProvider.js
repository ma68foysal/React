import React, { useState } from 'react'
import { themeSwitch } from '../Context'

function ThemeProvider({children}) {



    const [theme , setTheme] = useState(false)

    const themeInfo ={
      theme:theme,
      setTheme:setTheme,
    }

  return (
    <>

        <themeSwitch.Provider value={themeInfo}>
            {children}
        </themeSwitch.Provider>
        </>
  )
}

export default ThemeProvider