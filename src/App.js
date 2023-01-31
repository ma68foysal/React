import react from 'react';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Products from './Components/Products';
import Cart from './Components/shared/Cart';
import CartDetails from './Components/shared/CartDetails';
import NavBar from './Components/shared/NavBar';
import CartInfoProvider from './context/CartInfoProvider';




function App() {
 
  
  
  return (
  <>
   <CartInfoProvider>
    <Router>
      <NavBar/>
      <Cart/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart-details' element={<CartDetails/>}/>
      </Routes>
    </Router>
    </CartInfoProvider>
    
  </>

  );
}

export default App;
