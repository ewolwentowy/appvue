<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
   

    <div class="wrapper">
      <Navbar />
      
    </div>
  </header>

  <RouterView />
  <footer>
    <p>
      &copy 2024 || Design By Mateusz
    </p>
  </footer>
</template>

<style scoped>
footer{
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 20px;
  background-color: #535353;
  color: rgb(235, 203, 25);
}

</style>
