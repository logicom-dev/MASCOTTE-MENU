import axios from 'axios'
// const url ="https://mascotte-api.onrender.com/api/"
const url ="http://localhost:3000/api"
//const url=process.env.REACT_APP_ADRESSE+"api";  si en utulise .env
export default axios.create({
    baseURL: url
})
// http://localhost:8800/articles / "http://localhost:3003/api" "https://mechmecha-api.onrender.com/api" 