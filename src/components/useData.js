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

/*sync function useData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    class Type {
      constructor(name, urlType) {
        this.name = name;
        this.url = urlType;
      }
    }

    json.forEach((typeData) => {
      const type = new Type(typeData.name, typeData.url);

      species.value.push(type);
    });
  } catch (error) {
    console.error(error.message);
  }
} */