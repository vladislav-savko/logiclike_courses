import axios from 'axios'
import { API } from 'config'

const instance = axios.create({
  baseURL: `${API}/docs`,
  headers: {
    'Accept-Language': 'ru-RU',
    'Content-type': 'application/json',
  },
})

export default instance
