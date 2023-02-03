import React, { useContext } from 'react'
import { CartItem } from '../context/context'
import '../Style/style.css'
function SingleProductPage() {
  const cartItems = useContext(CartItem)
  const {productId,setProductId} = cartItems
  console.log(productId);
  
  
  return (
    <div>
    
    {
       productId ? 
       <div className="container">
        <div className="row">

        <div className="col-lg-6">
          <div className='d-flex'>
          <div>
           {productId.images.map((productIMG)=>
           <div>
          <img className='product-img' src={productIMG} alt="" />
           </div>
              
           )}
          </div>
       <div className="ms-2" key={productId.id}>
        <img src={productId.thumbnail} className="card-img-top " alt="..."/>
         </div>
         {/* ./card */}
          </div>
          
        </div>
        {/* ./col-lg-4 left */}
        <div className="col-lg-4">
       <div className="" key={productId.id}>
        <div className="card-body">
         <h5 className="card-title">{productId.title}</h5>
         <p className="card-text">{productId.description}</p>
         <div className='d-flex justify-content-between'>
         <p className='price'>{`$${productId.price}`}</p>
         <p className='price'>{productId.rating}</p>
         </div>
         </div>
         {/* ./card-body */}
         </div>
         {/* ./card */}
        </div>
        {/* ./col-lg-4 right */}
        </div>
        {/* row */}
       </div>
      
 :<h1>go to hell</h1>
    }
    
    </div>
  )
}

export default SingleProductPage