<template>
  <div v-if="loading">
    <LoadingComponent/>
  </div>
  <div v-else-if="error" class="error">
    <error-component :error="error"/>
  </div>
  <div v-else-if="species" class="main">
    <h2 >Species data</h2>
      <div class="container text-center">
        <div class="row justify-content-center    ">
          <div class="col-3 my-1">
            Species:
          </div>
          <div class="col-3 my-1">
            {{ species.name }}
          </div>
        </div>
        <div class="row justify-content-center ">
          <div class="col-3 my-1">
            Classification:
          </div>
          <div class="col-3 my-1">
            {{ capitalize(species.classification) }}
          </div>
        </div>
        <div class="row justify-content-center ">
          <div class="col-3 my-1">
            Designation:
          </div>
          <div class="col-3 my-1">
            {{ capitalize(species.designation) }}
          </div>
        </div>
        <div class="row justify-content-center ">
          <div class="col-3 my-1">
            Average height:
          </div>
          <div class="col-3 my-1">
            {{ capitalize(species.average_height) }}
          </div>
        </div>
        <div class="row justify-content-center ">
          <div class="col-3 my-1">
            Skin colors:
          </div>
          <div class="col-3 my-1">
            {{ capitalize(species.skin_colors) }}
          </div>
        </div>
        <div class="row justify-content-center ">
          <div class="col-3 my-1">
            Hair colors:
          </div>
          <div class="col-3 my-1">
            {{ capitalize(species.hair_colors) }}
          </div>
        </div>
        <div class="row justify-content-center ">
          <div class="col-3 my-1">
            Eye colors:
          </div>
          <div class="col-3 my-1">
            {{ capitalize(species.eye_colors) }}
          </div>
        </div>
        <div class="row justify-content-center ">
          <div class="col-3 my-1">
            Average lifespan:
          </div>
          <div class="col-3 my-1">
            {{ species.average_lifespan }}
          </div>
        </div>
      </div>
      <div class="container-fluid text-center">
        <router-link to="/species" class="btn text-decoration-none">
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
import {useRoute} from "vue-router";
import {useFetch} from "@/components/useData.js";
import {ref, watch} from "vue";
import LoadingComponent from "./LoadingComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";

const route = useRoute();
const species = ref({});

const id = route.params.id;
const url = `https://swapi.info/api/species/${id}`;

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const {data, error, loading} = useFetch(url)

watch(data, (newData) => {
  species.value = newData;
})

</script>

<style scoped>
@import "../assets/styleDetails.css";
</style>
