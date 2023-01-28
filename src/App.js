import react ,{useState} from 'react';
import axios from 'axios'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import WeatherInput from './Components/WeatherInput';
import WeatherResult from './Components/WeatherResult';




function App() {
  // const [data, setData]=useState()
  // function get_data(cityName){
  //   const api =`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=c2965f463fd1030468730b6b9d4096a8`
  //   axios.get(api).then((res)=>{
  //    setData(res)
  //   })
  //   .catch((error)=>{
  //     console.error(error)
  //   })
  //}
  return (
  <div>
    <Router>
      <Routes>
        <Route path='/' element={<WeatherInput/>}/>
        {/* <Route path='/result' element={<WeatherResult />}/> */}
   
   </Routes>
   </Router>
 
  </div>

  );
}

export default App;
