<template>
  <div v-if="loading">
    <LoadingComponent/>
  </div>
  <div v-else-if="error" class="error">
    <error-component :error="error"/>
  </div>
  <div v-else-if="planet" class="main">
    <h2>Planetary data</h2>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-3 my-1">
          Name:
        </div>
        <div class="col-3 my-1">
          {{ planet.name }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Rotation period:
        </div>
        <div class="col-3 my-1">
          {{ planet.rotation_period }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Orbital period:
        </div>
        <div class="col-3 my-1">
          {{ planet.orbital_period }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Diameter:
        </div>
        <div class="col-3 my-1">
          {{ planet.diameter }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Climate:
        </div>
        <div class="col-3 my-1">
          {{ capitalize(planet.climate) }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Gravity:
        </div>
        <div class="col-3 my-1">
          {{ planet.gravity }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Terrain:
        </div>
        <div class="col-3 my-1">
          {{ capitalize(planet.terrain) }}
        </div>
      </div>
      <div class="row justify-content-center ">
        <div class="col-3 my-1">
          Surface water:
        </div>
        <div class="col-3 my-1">
          {{ planet.surface_water }}
        </div>
      </div>
    </div>
    <div class="container-fluid text-center">
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
