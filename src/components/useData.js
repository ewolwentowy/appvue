import {onMounted, ref} from 'vue'

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)
    const loading = ref(true)

    async function getData() {
        error.value = null;
        loading.value = true;

        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            data.value = json;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    }

    onMounted(getData);

    return {
        data, error, loading
    }
}

