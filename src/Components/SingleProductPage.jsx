import React, { useContext } from 'react'
import { CartItem } from '../context/context'

function SingleProductPage() {
  const cartItems = useContext(CartItem)
  const {productId,setProductId} = cartItems
  
  
  return (
    <div>
    
    {
       productId ? <div className="col-lg-4">
       <div className="card" key={productId.id}>
        <img src={productId.thumbnail} className="card-img-top" alt="..."/>
        <div className="card-body">
         <h5 className="card-title">{productId.title}</h5>
         <p className="card-text">{productId.description}</p>
         <div className='d-flex justify-content-between'>
         <p className='price'>{`$${productId.price}`}</p>
         <p className='price'>{productId.rating}</p>
         </div>
         
         
         
       </div>
         </div>
 
 </div>
 :<h1>go to hell</h1>
    }
    
    </div>
  )
}

export default SingleProductPage