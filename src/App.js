import { createContext, useState } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import Posts from './Layout/Posts/Posts';

export const users = createContext()
function App() {
  
  const [isLoggedIn , setIsLoggedIn] = useState(false)

  const userInfo ={
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn
  }

  console.log(process.env.REACT_APP_API_URL);

  return (
  <div>
    <users.Provider value={userInfo}>
    <Layout>
      <Posts/>
    </Layout>
    </users.Provider>

  </div>

  );
}

export default App;
