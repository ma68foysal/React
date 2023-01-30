import react from 'react';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Products from './Components/Products';
import NavBar from './Components/shared/NavBar';




function App() {
 
  
  
  return (
  <>

    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
      </Routes>
    </Router>
    
  </>

  );
}

export default App;
