
import react, { useEffect, useState }  from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './Components/Shared/NavBAr/NavBar';
import Login from './Components/User/Login';
import Registration from './Components/User/Registration';




function App() {
  const user = sessionStorage.getItem('user')
   
   const userInfo = JSON.parse(user)
   const [loggedInUser , setLoggedInUser]=useState(false)

  
  
    useEffect(()=>{
    if(userInfo){
      setLoggedInUser(true)
    }
   
  },[userInfo])
 
  
  return (
  <div>
   <Router >
    <NavBar loggedInUser={loggedInUser}/>
    <Routes>
     <Route path='/login'element={<Login/>}/>
     <Route path='/register'element={<Registration/>}/>
     </Routes>
     </Router>
 
  </div>

  );
}

export default App;
