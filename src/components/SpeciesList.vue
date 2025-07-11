<template>
  <div v-if="error">Oops! Error encountered: {{ err.value }}</div>
  <div v-else-if="data">
   <div class="container-fluid px-4 text-center">
    <h2 class="text-center my-4">Species list</h2>
    <div class="row">
      <div
          v-for="(data, index) in species"
          :key="index"
          class="list-unstyled col-sm-12 col-md-4 col-lg-3"
      >
        <router-link
            :to="`/species/${index + 1}`"
            class="text-decoration-none btn"
        >
          {{ type.name }}
        </router-link>
      </div>
    </div>
  </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import {ref, onMounted, watch } from "vue";
import {useFetch} from "./useData.js";

const url = "https://swapi.info/api/species";
const species = ref([]);

const { data, error } = useFetch(url)

watch(data, () => {
  if(data) {
    console.log(data.value[1])
  }
})






</script>

<style scoped>
@import "../assets/styleList.css";
</style>
