<template>
  <div v-if="loading">
    <LoadingComponent/>
  </div>
  <div v-else-if="error" class="error">
    <error-component :error="error"/>
  </div>
  <div v-else-if="person" class="main">
    <h2>Character data</h2>
    <div>
      <table>
        <tr>
          <td>Height:</td>
          <td>{{ person.height }}</td>
        </tr>
        <tr>
          <td>Mass:</td>
          <td>{{ person.mass }}</td>
        </tr>
        <tr>
          <td>Hair color:</td>
          <td>
            {{ capitalize(person.hair_color) }}
          </td>
        </tr>
        <tr>
          <td>Skin color:</td>
          <td>
            {{ capitalize(person.skin_color) }}
          </td>
        </tr>
        <tr>
          <td>Eye color:</td>
          <td>
            {{ capitalize(person.eye_color) }}
          </td>
        </tr>
        <tr>
          <td>Birth year:</td>
          <td>{{ person.birth_year }}</td>
        </tr>
        <tr>
          <td>Gender:</td>
          <td>
            {{ capitalize(person.gender) }}
          </td>
        </tr>
      </table>
      <router-link to="/people" class="btn text-decoration-none">
        Back to the list
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-return-left"
            viewBox="0 0 16 16"
        >
          <path
              fill-rule="evenodd"
              d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import LoadingComponent from "./LoadingComponent.vue";
import {useFetch} from "@/components/useData.js";
import ErrorComponent from "@/components/ErrorComponent.vue";

const person = ref({});
const route = useRoute();

const id = route.params.id;
const url = `https://swapi.info/api/people/${id}`;

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const {data, error, loading} = useFetch(url)

watch(data, (newData) => {
  person.value = newData;
})
</script>

<style scoped>
@import "../assets/styleDetails.css";
</style>
