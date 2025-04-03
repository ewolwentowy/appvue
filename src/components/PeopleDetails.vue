<template>
	<div v-if="person">
		<h2>Dane postaci</h2>
		<ul>
			<p>{{ person.name }}</p>
            <p>{{ person.height }}</p>
			<p>{{ person.mass }}</p>
			<p>{{ person.hair_color }}</p>
			<p>{{ person.skin_color }}</p>
			<p>{{ person.eye_color }}</p>
			<p>{{ person.birth_year }}</p>
			<p>{{person.gender }}</p>
            <router-link to="/people">← Powrót do listy</router-link>
		</ul>
      
	</div>
	<div v-else>
    <p>Ładowanie danych...</p> 
  </div>
</template>

<script setup>

defineProps({
  person: Object
});




</script>

<style>
</style>
