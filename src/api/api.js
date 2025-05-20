// src/api.js
import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000',
})

// Optional: auth / error interceptors
api.interceptors.request.use(cfg => {
  const token = localStorage.getItem('bearer_token')
  if (token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})

api.interceptors.response.use(
  res => res,
  err => {
    // global error handling
    if (err.response && err.response.status === 401) {
      // e.g. redirect to login
    }
    return Promise.reject(err)
  }
)

export default api
