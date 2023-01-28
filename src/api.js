import axios from "axios";

  const Api = axios.create({
     baseURL: "https://backend-minhajsadik.vercel.app",
     withCredentials: true,

    }
  )

  // Api.interceptors.request.use((request,)=>{
  //   console.log({request});
  //   if(sessionStorage.getItem('token')){
  //       request.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem('token')).token}`;

  //   }
  //   return request
  // })

  export const loginUser = (userInfo) => Api.post('/api/user/login', userInfo)
  export const registerUser = (userInfo) => Api.post('/api/user/register', userInfo)
  export const getQuizzes = () => Api.get('/api/quiz/all')
  export const get_Quiz_by_id = (id) => Api.get(`/api/quiz/${id}`)
  export const addQuiz = (quizData) => Api.post(`/api/quiz/add`, quizData);


