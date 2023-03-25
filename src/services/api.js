import axios from 'axios'
const baseURL = 'https://simple-nodejs-app-test.herokuapp.com/'

const api = axios.create({
    baseURL: baseURL,
})

export default api