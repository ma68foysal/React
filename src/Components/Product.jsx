import React from 'react'

// import style from './product.module.css'

function Product({singleProduct,i}) {
  
  return (
   
   

    
    
      <div className="col-lg-4">
        <div className="card">
         <img src={singleProduct.thumbnail} className="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">{singleProduct.title}</h5>
          <p className="card-text">{singleProduct.description}</p>
          <p className='price'>{`$${singleProduct.price}`}</p>
          <a href="#" className="btn btn-primary">Add To Cart</a>
        </div>
          </div>
  
  </div>
 
  )
}

export default Product