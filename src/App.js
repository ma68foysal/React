import react, { useEffect, useState } from 'react';




function App() {
  const [products , setProduct]=useState()
  
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=>setProduct(data));
  },[])
  
  
  return (
  <div>

    {
      products?.products?.map((singleProduct,i)=> <h1>{singleProduct.title}</h1>)
    }
    
  </div>

  );
}

export default App;
