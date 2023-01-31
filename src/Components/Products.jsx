import React, { useEffect, useState } from 'react'

import ProductCase from '../util/ProductCase';
import Product from './Product';


function Products() {
  const [products , setProduct]=useState();

 useEffect(()=>{
   fetch('https://dummyjson.com/products')
   .then(res => res.json())
   .then((data)=>setProduct(data));
 },[])

  return (
    <div>
      
      <ProductCase>
        
    {
      products?.products?.map((singleProduct,i)=> <Product singleProduct={singleProduct} key={i} />  )
    }
    </ProductCase>
    </div>
  )
}

export default Products