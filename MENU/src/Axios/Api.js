import axios from 'axios'
export default axios.create({
    baseURL: process.env.REACT_APP_API
})

// export default axios.create({
//     baseURL1: "http://localhost:3000/api/"
// })