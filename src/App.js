// import './App.css';
// import Layout from './Componets/Children/Layout/Layout';
// import Logo from './Componets/Children/Layout/Logo/Logo';
// import NavBtn from './Componets/Children/Layout/NabBtn/NavBtn';
// import NavMenu from './Componets/Children/Layout/NavMenu/NavMenu';
// import Homework from './Componets/HomeWork/Homework';
// import HomeworkTwo from './Componets/HomeWork/HomeworkTwo';
// import Showtext from './Componets/Showtext/Showtext';
import Component from './component';
import UI from './Componets/UI/UI';
import Form from './Form';
import User from './Componets/User/User';


function App() {
  return (
    <div>
  <Component />
    <Form />
    <User massage="Now I'm Loged In"/>
    <UI/>
    
    </div>
    
      // <div className='styles'>
        // {/* <Showtext/>
        // <Homework/> */}
        // {/* <HomeworkTwo/> */}
        // {/* <Layout>
        //   <Logo/>
        //   <NavMenu/>
        //   <NavBtn/>
        // </Layout> */}

      // </div>
   

  );
}

export default App;
