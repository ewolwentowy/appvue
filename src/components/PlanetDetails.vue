<template>
	<div v-if="planet" class="main">
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
						{{
							planet.climate.charAt(0).toUpperCase() + planet.climate.slice(1)
						}}
					</td>
				</tr>
				<tr>
					<td>Gravity:</td>
					<td>{{ planet.gravity }}</td>
				</tr>
				<tr>
					<td>Terrain:</td>
					<td>
						{{
							planet.terrain.charAt(0).toUpperCase() + planet.terrain.slice(1)
						}}
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
	<div v-else>
		<p>Data loading...</p>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const planet = ref();
const route = useRoute();

const id = route.params.id;
async function getData() {
	try {
		const url = `https://swapi.info/api/planets/${id}`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		planet.value = json;
	} catch (error) {
		console.error(error.message);
	}
}

onMounted(getData);
</script>

<style scoped>
.main {
	height: 85vh;
	background-color: #30303033;
}
h2 {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	color: rgb(255, 232, 31);
	letter-spacing: 0.1rem;
}
div {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 5px;
	color: rgb(255, 232, 31);
	font-size: 1.4rem;
	letter-spacing: 0.1rem;
}
td {
	padding: 5px 20px;
	font-weight: bold;
}
.btn {
	margin: 20px;
	padding: 10px 20px;
	color: rgb(255, 232, 31);
	font-size: 18px;
	border: 1px solid rgb(255, 232, 31);
	border-radius: 5px;
	box-shadow: 1px 1px 2px rgb(255, 232, 31);
	transition: 0.3s;
}
.btn:hover {
	color: rgb(255, 255, 255);
	background-color: #6b6a23;
}
.btn:active {
	border: none;
	scale: 0.95;
}
</style>
