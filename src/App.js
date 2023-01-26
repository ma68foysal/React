
import react, { useEffect, useState }  from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import './App.css';
import AddQuize from './Components/Quiz/AddQuize';
import PlayQuiz from './Components/Quiz/PlayQuiz';
import QuizDetails from './Components/Quiz/QuizDetails';
import QuizResult from './Components/Quiz/QuizResult';
import NavBar from './Components/Shared/NavBAr/NavBar';
import Login from './Components/User/Login';
import Registration from './Components/User/Registration';
import Quizzes from './Pages/Quizzes';
import Practice from './practice/Practice';




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
     <Route path='/'element={<Quizzes loggedInUser={loggedInUser}/>}/>
     <Route path='/quiz/:id'element={<QuizDetails/>}/>
     <Route path='/play/quiz'element={<PlayQuiz/>}/>
     <Route path='/quiz/result'element={<QuizResult/>}/>
     <Route path='/quize/add'element={<AddQuize/>}/>
     <Route path='/practice'element={<Practice/>}/>
     </Routes>
     </Router>
 
  </div>

  );
}

export default App;
