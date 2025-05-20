// src/services/resourceFactory.js
import api from "../api/api"

export function makeService(resourceName) {
  const prefix = `/${resourceName}`
  return {
    list:    params => api.get(prefix,      { params }),
    get:     id     => api.get(`${prefix}/${id}`),
    create:  data   => api.post(prefix,      data),
    update:  (id, data) => api.patch(`${prefix}/${id}`, data),
    remove:  id     => api.delete(`${prefix}/${id}`),
  }
}
