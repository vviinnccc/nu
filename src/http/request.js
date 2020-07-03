import axios from 'axios'

export function http(config) {
  const login = axios.create({
    baseURL: 'http://127.0.0.1/nutritionback/',
    timeout: 5000
  })

  return login(config)
}