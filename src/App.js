import react  from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import WeatherInput from './Components/WeatherInput';
import WeatherResult from './Components/WeatherResult';




function App() {
  
  return (
  <div>
    <Router>
      <Routes>
        <Route path='/' element={<WeatherInput/>}/>
        <Route path='/result' element={<WeatherResult/>}/>
   
   </Routes>
   </Router>
 
  </div>

  );
}

export default App;
