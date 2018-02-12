import axios from 'axios'

const HTTP = axios.create({
  baseURL: `https://mgh-system.herokuapp.com/api/`,
  headers: {
    Authorization: `JWT ${localStorage.getItem('token')}`
  }
})
export default HTTP
