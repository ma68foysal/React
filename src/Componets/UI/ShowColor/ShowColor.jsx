import React from 'react'
import Input from './Input/Input'

export default function ShowColor() {
    const [uiColor, setUiColor] = React.useState(null)
    

  return (
    <div>
        <div className='uiColor' style={{background: `${uiColor}`}}>

        </div>
        <Input setUiColor={setUiColor}/>
    </div>
  )
}
