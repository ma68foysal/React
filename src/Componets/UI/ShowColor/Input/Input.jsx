import React from 'react'

export default function Input({setUiColor}) {
    const [activeColor, setActiveColor] = React.useState(null)
    const onInputChange = (e) => {
        const {value} = e.target
        setActiveColor(value)
        setUiColor(value)
    }
  return (
    <div>
        <input type="text" value={activeColor} onChange={onInputChange} />
    </div>
  )
}
