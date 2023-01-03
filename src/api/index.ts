import axios from 'axios'

const URL = process.env.NEXT_PUBLIC_URL_API


const api = axios.create({
  baseURL: URL,
})

export default api