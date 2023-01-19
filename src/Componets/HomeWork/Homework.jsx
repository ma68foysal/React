import React from 'react'
import '../../App.css'
import Showcolor from './Showcolor'
import Category from './Catagory/Category'

import Products from './Products'


function Homework() {
    const [Count,setCount]=React.useState(0)

    const[uiColor,setUiColor]= React.useState(null)
    function handleincrement(){
        setCount(Count+1)
    }
    function handledicrement(){
        setCount(Count-1)
    }
       const categories = [
        {
            id: "eroielkrjlkewr",
            categoryName: "Sporting Goods",
            products: [
                {
                    id: "1",
                    name: "FootBall",
                    price: "$49",
                },
                {
                    id: "2",
                    name: "BaseBall",
                    price: "$59",
                },
                {
                    id: "3",
                    name: "BusketBall",
                    price: "$69",
                }
            ]
        },
        {
            id: "sadfasdewrwew",
            categoryName: "Electronics",
            products: [
                {
                    id: "4",
                    name: "I Pod Touch",
                    price: "$499",
                },
                {
                    id: "5",
                    name: "I Phone 5",
                    price: "$149",
                },
                {
                    id: "6",
                    name: "I Phone 7",
                    price: "$349",
                }
            ]
        }
       ]

  return (
    <>
    <div className='main'>
        <div className="child-1">
            <input type="text" placeholder='Search....' /><br/>
            <input name='checkbox' type="checkbox" />
            <label htmlFor="checkbox">Only Show Products In Stock</label>

        </div>
        <div className="child-2">
           

           {
            categories.map((category)=> <Category key={category.id} category={category}/>)
           }
            
        </div>
        
       
        
    </div>
    <>
    <button onClick={handleincrement}>Increment</button>
    <h1>{Count}</h1>
    <button onClick={handledicrement}>Dicrement</button>
    </>

    <div className='uiColor' style={{backgroundColor:`${uiColor}`}}>

    </div>
    <Showcolor setColor={setUiColor}/>
    </>
    

  )
}

export default Homework