<template>
  <div v-if="loading">
    <loading-component/>
  </div>
  <div v-else-if="error">
    <error-component :error/>
  </div>
  <div v-else>
    <div class="container-fluid px-4 text-center">
      <h2 class="text-center my-4">List of characters</h2>
      <div class="row">
        <div
            v-for="(person, index) in data"
            :key="index"
            class="list-unstyled col-sm-12 col-md-4 col-lg-3"
        >
          <router-link
              :to="`/people/${index + 1}`"
              class="text-decoration-none btn"
          >
            {{ person.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useFetch} from "@/components/useData.js";
import ErrorComponent from "@/components/ErrorComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";

const people = ref([]);
const url = "https://swapi.info/api/people";
const {data, error, loading} = useFetch(url)
</script>

<style scoped>
@import "../assets/styleList.css";
</style>
