import axios from 'axios'

const API = 'https://logiclike.com'

const instance = axios.create({
  baseURL: `${API}/docs`,
  headers: {
    'Accept-Language': 'ru-RU',
    // 'Access-Control-Allow-Origin': '*',
    // 'Cache-Control': 'no-cache',
    'Content-type': 'application/json',
  },
})

export default instance
