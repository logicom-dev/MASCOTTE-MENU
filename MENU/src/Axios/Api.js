import axios from 'axios'
export default axios.create({
//    baseURL: process.env.REACT_APP_API
      baseURL:  "https://mascotte-api.onrender.com/api/"
})

// export default axios.create({
//     baseURL: "http://localhost:5000/api/"
// })