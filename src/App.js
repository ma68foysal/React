import react  from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import StyleProvider from './context/contextProvider/StyleProvider';
import ThemeProvider from './context/contextProvider/ThemeProvider';
import UserProvider from './context/contextProvider/UserProvider';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Home from './Pages/Home';



function App() {
  
  return (
  <div>
     <ThemeProvider>
     <StyleProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blog' element={<Blog/>}/>
          </Routes>
        </Router>
        
           

    </UserProvider>
    </StyleProvider>
    </ThemeProvider>
 
  </div>

  );
}

export default App;
