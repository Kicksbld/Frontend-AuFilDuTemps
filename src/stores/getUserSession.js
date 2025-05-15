import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useSessionDataStore = defineStore("sessionData", () => {
  const data = ref([]);


  const savedSession = localStorage.getItem("userSession");
  if (savedSession) {
    data.value = JSON.parse(savedSession);
  }

  const isLoading = ref(false);
  const error = ref(null);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const fetchSession = async () => {
    const url = `${BACKEND_URL}/api/me`;
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetch(url, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      data.value = result;
      localStorage.setItem("userSession", JSON.stringify(result)); 
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  // ✅ Computed
  const getData = computed(() => data.value);
  const getUserData = computed(() => data.value?.user || null);

  //& const getUserId = computed(() => data.value?.user?.id || null);

  const getSessionData = computed(() => data.value?.session || null);
  const getLoadingStatus = computed(() => isLoading.value);
  const getError = computed(() => error.value);
  const reset = () => {
    data.value = [];
    localStorage.removeItem("userSession");
  };
  

  return {
    fetchSession,
    getData,
    getUserData,
    //& getUserId,
    getSessionData,
    getLoadingStatus,
    getError,
    isLoading,
    error,
    reset
  };
});


