<template>

  <div class="error">
  <div> {{error}}</div>
  </div>
</template>
<script setup>
defineProps({error: String})
</script>

<style scoped>
.error {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 85vh;
	background-color: #30303033;
}

div {
	color: rgb(255, 232, 31);
}


</style>