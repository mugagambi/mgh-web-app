import axios from 'axios'

const HTTP = axios.create({
  baseURL: `https://mgh-system.herokuapp.com/api/`
})
export default HTTP
