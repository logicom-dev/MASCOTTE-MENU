import axios from 'axios'
export default axios.create({
   baseURL: process.env.REACT_APP_API
})

// export default axios.create({
//     baseURL: "http://localhost:5000/api/"
// })