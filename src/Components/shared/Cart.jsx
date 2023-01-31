import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartInfo } from '../../context/context'



function Cart() {
  const cart = useContext(CartInfo)
  const {openCart,setOpeanCart}=cart
  const navigate = useNavigate()
  function handleClick (){
    setOpeanCart(!openCart)
    navigate('/cart-details')
    
  }
    
  return (
    <> 
            <div className='cartBody' style={{ display:!openCart ?'none':'block'}} >
             <div className='cart'>
              <div className='cartItemBox d-flex justify-content-between'>
                <div className='d-flex '>
                  <img src="./logo192.png" style={{width:'30px'}} alt="" />
                  <div>
                    <p>name</p>
                    <p>des</p>
                  </div>
                </div>
                <div className='d-flex'>
                  <div className='d-flex'>
                    <button className='inrease'>+</button>
                    <p>price</p>
                    <button className='decrise'>-</button>
                  </div>
                  <div>
                    <button>remove</button>
                  </div>
                </div>
              </div>
            <button onClick={handleClick}>View CArt</button>
           </div>
            </div>
            
       
        
    </>
  )
}

export default Cart