import { createContext, useState } from 'react';
import './App.css';
import Hero from './Hero/Hero';
import Layout from './Layout/Layout';
import Posts from './Layout/Posts/Posts';
import Login from './Users/Login/Login';
import Regi from './Users/Regi/Regi';


export const users = createContext()
export const styles  = createContext()

function App() {
  

  const sessionValue = sessionStorage.getItem('user')
  


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

 

  return (
  <div onClick={()=>stylesValue.style === "block"?'none':stylesValue.show === 'block'?'none':'block'}>
    
    <users.Provider value={userInfo}>
    <styles.Provider value={stylesValue} >
    <Layout >
      <Login/>
      <Regi/>
      <Posts/>
      <Hero/>

    </Layout>
    </styles.Provider>
    </users.Provider>
    
  </div>

  );
}

export default App;
