// src/composables/useApi.js
import { ref } from 'vue'
export function useApi(fn) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  async function run(...args) {
    loading.value = true
    error.value = null
    try {
      const res = await fn(...args)
      data.value = res.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, run }
}
