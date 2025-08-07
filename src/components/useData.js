import { ref } from 'vue'

export  function useFetch (url) {
    const data = ref(null)
    const error = ref(null)

    fetch(url)
    .then(response => response.json())
    .then(json => {
        data.value = json
    })
    .catch(err => {
        error.value = err.value()
    })
    return {
        data,error
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