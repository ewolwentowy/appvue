<template>
	<div>
		<h2>Lista planet</h2>
		<ul >
			<li v-for="(planet, index) in worlds" :key="index" >
                {{planet.name }} </li>
		</ul>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const worlds = ref([]);

async function getData() {
	try {
		const url = "https://swapi.info/api/planets";
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();

		class Planets {
			constructor(name, urlPlanet) {
				this.name = name;
				this.url = urlPlanet;
			}
		}
		json.forEach((planetData) => {
			const planet = new Planets(planetData.name, planetData.url);

			worlds.value.push(planet);
		});
	} catch (error) {
		console.error(error.message);
	}
}

onMounted(getData);
</script>

<style></style>
