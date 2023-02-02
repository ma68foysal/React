import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useReducer } from 'react'
import { useCallback } from 'react'
import { useContext } from 'react'
import { CartItem } from '../context/context'
import "../Style/style.css"
import Cart from './shared/Cart'
// import style from './product.module.css'

function Product({singleProduct,i}) {
  const cartItems = useContext(CartItem)
  const {item, setItem} = cartItems

  
  function handleClick(){
    item.push(singleProduct)
    setItem(item)
  }

  
  return (
    <>
   
      <div className="col-lg-4">
        <div className="card" key={singleProduct.id}>
         <img src={singleProduct.thumbnail} className="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">{singleProduct.title}</h5>
          <p className="card-text">{singleProduct.description}</p>
          <div className='d-flex justify-content-between'>
          <p className='price'>{`$${singleProduct.price}`}</p>
          <p className='price'>{singleProduct.rating}</p>
          </div>
          
          <a href="#" className="btn btn-primary" onClick={handleClick}>Add To Cart</a>
        </div>
          </div>
  
  </div>
  </>
  )
}

export default Product