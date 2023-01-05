import { createContext, useState } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import Posts from './Layout/Posts/Posts';
import Login from './Users/Login/Login';


export const users = createContext()
export const styles  = createContext()
function App() {

  const sessionValue = sessionStorage.getItem('user')

  const visitor = JSON.parse(sessionValue)

   

  
  
  const [isLoggedIn , setIsLoggedIn] = useState(false)

  const userInfo ={
    visitor,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn
  }

  console.log(process.env.REACT_APP_API_URL);

  return (
  <div>
    
    <users.Provider value={userInfo}>
    <Layout>
      <Login/>
      <Posts/>

    </Layout>
    </users.Provider>
   

  </div>

  );
}

export default App;
