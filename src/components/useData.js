import {onMounted, ref} from 'vue'

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)
    const loading = ref(true)

    async function getData() {
        error.value = null;
        loading.value = true;

        try {
            const controller = new AbortController();
            const timeoutSignal = AbortSignal.timeout(5000);
            const response = await fetch(url, {
                signal: AbortSignal.any([controller.signal, timeoutSignal]),
            });
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            data.value = await response.json();
        } catch (err) {
            if(err.name === "AbortError") {
            } else if(err.name === "TimeoutError") {
            }
            error.value = `Error: ${err.message}`;
        } finally {
            loading.value = false;
        }
    }

    onMounted(getData);

    return {
        data, error, loading
    }
}

