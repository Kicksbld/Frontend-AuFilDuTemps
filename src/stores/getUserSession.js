import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useSessionDataStore = defineStore("sessionData", () => {
    const state = reactive({
        data: [],
    });

    const isLoading = ref(false);
    const error = ref(null);
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    // Fetch data function
    const fetchSession = async () => {
        const url = `${BACKEND_URL}/api/me`;
        isLoading.value = true;
        error.value = null;
        try {
            const response = await fetch(url, {
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
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
    const getUserData = computed(() => state.data?.user || null);
    const getSessionData = computed(() => state.data?.session || null);
    const getLoadingStatus = computed(() => isLoading.value);
    const getError = computed(() => error.value);

    return {
        fetchSession,
        state,
        getData,
        getSessionData,
        getUserData,
        getLoadingStatus,
        getError,
        isLoading,
        error,
    };
});
