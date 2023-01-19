import React from 'react'

const initialState = {
    title: "",
    description: "",
}
const initState = {
    title: "",
    description: "",
}
let subject = 'React'

const Form = () => {
    const [text,setText]=React.useState('')
    const [allText,setAllText]=React.useState([])


    const handleAdd = (e)=>{
        allText.push(text)
        console.log(allText); 
        setText("") 
    }
    const onInputChange=(e)=>{
        setText(e.target.value)

    }

    const handleForm= (e)=>{
        e.preventDefault()
        console.log(e);

    }
    const formInputChange= (e)=>{
        console.log(e.target.value);

    }
    const  {title}=initialState;
    const  {description}=initialState;

  return (
    <div className='homework'>
        <h1> {subject} Home Work </h1>
        {/* <form className='Form' onSubmit={handleForm}>
            <input name={title} type="text" onChange={formInputChange} />
            <br/>
        <textarea name={description} id=""  rows="3" onChange={formInputChange}></textarea>
            <br/>
            <input className='Fbutton' type="submit"  />
        </form> */}

        <input 
        name='text'
        type="text"
        value={text}
        onChange={onInputChange}

         />
        <button onClick={handleAdd}>click</button>
        {
            allText.map((text, i)=> (
                <li>{text}</li>
            ))
        }
        
    </div>
  )
}

export default Form

