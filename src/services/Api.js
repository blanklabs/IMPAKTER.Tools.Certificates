import axios from 'axios'


export default() => {
    return axios.create({
        baseURL: `http://localhost:3030/api`
        //baseURL: `http://54.211.156.101/api`
    })
}