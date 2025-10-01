<template>
  <div v-if="loading">
    <LoadingComponent/>
  </div>
  <div v-else-if="error" class="error">
    <error-component :error="error"/>
  </div>
  <div v-else-if="planet" class="main">
    <h2>Planetary data</h2>
    <div>
      <table>
        <tr>
          <td>Name:</td>
          <td>{{ planet.name }}</td>
        </tr>
        <tr>
          <td>Rotation period:</td>
          <td>{{ planet.rotation_period }}</td>
        </tr>
        <tr>
          <td>Orbital period:</td>
          <td>{{ planet.orbital_period }}</td>
        </tr>
        <tr>
          <td>Diameter:</td>
          <td>{{ planet.diameter }}</td>
        </tr>
        <tr>
          <td>Climate:</td>
          <td>
            {{ capitalize(planet.climate) }}
          </td>
        </tr>
        <tr>
          <td>Gravity:</td>
          <td>{{ planet.gravity }}</td>
        </tr>
        <tr>
          <td>Terrain:</td>
          <td>
            {{ capitalize(planet.terrain) }}
          </td>
        </tr>
        <tr>
          <td>Surface water:</td>
          <td>{{ planet.surface_water }}</td>
        </tr>
      </table>
      <router-link to="/planets" class="btn text-decoration-none">
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
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import {useFetch} from "@/components/useData.js";
import LoadingComponent from "./LoadingComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";

const planet = ref({});
const route = useRoute();

const id = route.params.id;
const url = `https://swapi.info/api/planets/${id}`;

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
const {data, error, loading} = useFetch(url)

watch(data, (newData) => {
  planet.value = newData;
})
</script>

<style scoped>
@import "../assets/styleDetails.css";
</style>
