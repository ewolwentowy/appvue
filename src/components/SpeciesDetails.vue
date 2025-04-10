<template>
	<div v-if="species" class="main">
		<h2>Species data</h2>
		<div>
			<table>
				<tr>
					<td>Species:</td>
					<td>{{ species.name }}</td>
				</tr>
				<tr>
					<td>Classification:</td>
					<td>
						{{
							species.classification.charAt(0).toUpperCase() +
							species.classification.slice(1)
						}}
					</td>
				</tr>
				<tr>
					<td>Designation:</td>
					<td>
						{{
							species.designation.charAt(0).toUpperCase() +
							species.designation.slice(1)
						}}
					</td>
				</tr>
				<tr>
					<td>Average height:</td>
					<td>{{ species.average_height }}</td>
				</tr>
				<tr>
					<td>Skin colors:</td>
					<td>
						{{
							species.skin_colors.charAt(0).toUpperCase() +
							species.skin_colors.slice(1)
						}}
					</td>
				</tr>
				<tr>
					<td>Hair colors:</td>
					<td>
						{{
							species.hair_colors.charAt(0).toUpperCase() +
							species.hair_colors.slice(1)
						}}
					</td>
				</tr>
				<tr>
					<td>Eye colors:</td>
					<td>
						{{
							species.eye_colors.charAt(0).toUpperCase() +
							species.eye_colors.slice(1)
						}}
					</td>
				</tr>
				<tr>
					<td>Average lifespan:</td>
					<td>{{ species.average_lifespan }}</td>
				</tr>
			</table>

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
	<div v-else>
		<p>Data loading...</p>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const species = ref();
const route = useRoute();

const id = route.params.id;
async function getData() {
	try {
		const url = `https://swapi.info/api/species/${id}`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		species.value = json;
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
	letter-spacing: 0.1rem;
	color: rgb(255, 232, 31);
}
div {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 5px;
	font-size: 1.4rem;
	letter-spacing: 0.1rem;
	color: rgb(255, 232, 31);
}
td {
	padding: 5px 20px;
	font-weight: bold;
}
.btn {
	margin: 20px;
	padding: 10px 20px;
	font-size: 18px;
	color: rgb(255, 232, 31);
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
