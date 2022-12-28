import React from 'react'
import ProductList from './ProductList'

function Category({category}) {
  const [selected, setSelected] = React.useState('')

  function changeColor(tumarmatha) {
    setSelected(tumarmatha)
  }
  
    
  return (
    <div>
        <li className='category'>{category.categoryName}</li>
        {
          category.products.map((product) => (
            
            <ul className='productList' key={product.id}>
              <li className='product' style={{color: selected === product.id ? "red" : ''}} onClick={()=>changeColor(product.id)}>
                {product.name}                
                {product.price}                
              </li>
            </ul>
          ))
        }

        {/* {
            props.category.products.map((product,index) => <ProductList key={product.id} product={product} />)
        } */}
        
    </div>
  )
}

export default Category