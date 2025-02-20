import { defineStore } from "pinia";
import DBurl from "@/config/DBurl";
import { computed, reactive, ref } from "vue";

export const useDataBaseStore = defineStore("dataBaseData", () => {
  const state = reactive({
    data: [],
  });

  const isLoading = ref(false);
  const error = ref(null);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Fetch data function
  const fetchDBData = async (urlKey) => {
    const url = `${BACKEND_URL}${DBurl[urlKey]}`;
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      state.data = await response.json();
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  // Computed properties
  const getData = computed(() => state.data);
  const getLoadingStatus = computed(() => isLoading.value);
  const getError = computed(() => error.value);

  return {
    fetchDBData,
    state,
    getData,
    getLoadingStatus,
    getError,
    isLoading,
    error,
  };
});
