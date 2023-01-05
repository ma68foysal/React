import { createContext, useState } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import Posts from './Layout/Posts/Posts';
import Login from './Users/Login/Login';
import Regi from './Users/Regi/Regi';


export const users = createContext()
export const styles  = createContext()

function App() {
  

  const sessionValue = sessionStorage.getItem('user')
  console.log(sessionValue);


  const visitor = JSON.parse(sessionValue)


  const [style,setStyle]=useState('none')
  const [show,setShow]=useState('none')
   
  const stylesValue={
    style:style,
    setStyle:setStyle,
    show:show,
    setShow:setShow

  }
  
  
  const [isLoggedIn , setIsLoggedIn] = useState(false)

  const userInfo ={
    visitor,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn
  }

  // console.log(process.env.REACT_APP_API_URL);

  return (
  <div>
    
    <users.Provider value={userInfo}>
    <styles.Provider value={stylesValue} >
    <Layout>
      <Login/>
      <Regi/>
      <Posts/>

    </Layout>
    </styles.Provider>
    </users.Provider>
    
  </div>

  );
}

export default App;
