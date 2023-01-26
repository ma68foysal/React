import axios from "axios";

  const Api = axios.create({
     baseURL: "https://backend-minhajsadik.vercel.app"
    }
  )
  Api.interceptors.request.use((request,)=>{
    console.log({request});
    if(sessionStorage.getItem('token')){
        request.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem('token')).token}`;

    }
    return request
  })

  export const loginUser = (userInfo) => Api.post('/api/user/login', userInfo)
  export const registerUser = (userInfo) => Api.post('/api/user/register', userInfo)
  export const getQuizzes = () => Api.get('/api/quiz/all')
  export const get_Quiz_by_id = (id) => Api.get(`/api/quiz/${id}`)
  export const addQuiz = (quizData) => Api.post(`/api/quiz/add`, quizData);


//   import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
//   params: {lat: '35.5', lon: '-78.5'},
//   headers: {
//     'X-RapidAPI-Key': '19c3693bb4msh1d4d19a7554c05ap13315fjsn96de8fe370c3',
//     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });