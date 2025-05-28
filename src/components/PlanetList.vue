<template>
	<div class="container-fluid px-4 text-center">
		<h2 class="text-center my-4">List of planets</h2>
		<div class="row">
			<div
				v-for="(planet, index) in planets"
				:key="index"
				class="list-unstyled col-sm-12 col-md-4 col-lg-3"
			>
				<router-link
					:to="`/planets/${index + 1}`"
					class="text-decoration-none btn"
				>
					{{ planet.name }}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const planets = ref([]);

async function getData() {
	try {
		const url = "https://swapi.info/api/planets";
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();

		class Planet {
			constructor(name, urlPlanet) {
				this.name = name;
				this.url = urlPlanet;
			}
		}
		json.forEach((planetData) => {
			const planet = new Planet(planetData.name, planetData.url);

			planets.value.push(planet);
		});
	} catch (error) {
		console.error(error.message);
	}
}

onMounted(getData);
</script>

<style scoped>
@import "../assets/styleList.css";
</style>
