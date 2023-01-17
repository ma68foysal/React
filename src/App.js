import react  from 'react';
import './App.css';
import StyleProvider from './context/contextProvider/StyleProvider';
import ThemeProvider from './context/contextProvider/ThemeProvider';
import UserProvider from './context/contextProvider/UserProvider';
import Hero from './Hero/Hero';
import Layout from './Layout/Layout';
import AddPost from './Layout/Posts/AddPost';
import Posts from './Layout/Posts/Posts';
import Login from './Users/Login/Login';
import Regi from './Users/Regi/Regi';


function App() {
  
  return (
  <div>
     <ThemeProvider>
     <StyleProvider>
      <UserProvider>
        
            <Layout >
            <Login/>
            <Regi/>
            <Posts/>
            <Hero/>
            <AddPost/>
          </Layout>

    </UserProvider>
    </StyleProvider>
    </ThemeProvider>
 
  </div>

  );
}

export default App;
