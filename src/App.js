import { createContext, useState } from 'react';
import './App.css';
import Hero from './Hero/Hero';
import Layout from './Layout/Layout';
import AddPost from './Layout/Posts/AddPost';
import Posts from './Layout/Posts/Posts';
import Login from './Users/Login/Login';
import Regi from './Users/Regi/Regi';


export const users = createContext()
export const styles  = createContext()
export const themeSwitch = createContext()


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
  const [theme , setTheme] = useState(false)

  const themeInfo ={
    theme:theme,
    setTheme:setTheme,
  }


  return (
  <div onClick={()=>stylesValue.style === "block"?'none':stylesValue.show === 'block'?'none':'block'}>
    <themeSwitch.Provider value={themeInfo}>
    <users.Provider value={userInfo}>
    <styles.Provider value={stylesValue} >
    <Layout >
      <Login/>
      <Regi/>
      <Posts/>
      <Hero/>
      <AddPost/>

    </Layout>
    </styles.Provider>
    </users.Provider>
    </themeSwitch.Provider>
  </div>

  );
}

export default App;
