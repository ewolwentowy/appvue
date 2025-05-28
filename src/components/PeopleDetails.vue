<template>
	<div v-if="loading"><LoadingComponent /></div>
	<div v-if="error" class="error">{{ error }}</div>
	<div v-if="person" class="main">
		<h2>Character data</h2>
		<div>
			<table>
				<tr>
					<td>Height:</td>
					<td>{{ person.height }}</td>
				</tr>
				<tr>
					<td>Mass:</td>
					<td>{{ person.mass }}</td>
				</tr>
				<tr>
					<td>Hair color:</td>
					<td>
						{{ capitalize(person.hair_color) }}
					</td>
				</tr>
				<tr>
					<td>Skin color:</td>
					<td>
						{{ capitalize(person.skin_color) }}
					</td>
				</tr>
				<tr>
					<td>Eye color:</td>
					<td>
						{{ capitalize(person.eye_color) }}
					</td>
				</tr>
				<tr>
					<td>Birth year:</td>
					<td>{{ person.birth_year }}</td>
				</tr>
				<tr>
					<td>Gender:</td>
					<td>
						{{ capitalize(person.gender) }}
					</td>
				</tr>
			</table>
			<router-link to="/people" class="btn text-decoration-none">
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
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import LoadingComponent from "./LoadingComponent.vue";

const person = ref();
const route = useRoute();
const loading = ref(false);
const error = ref(null);

const id = route.params.id;
function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}
async function getData() {
	try {
		const url = `https://swapi.info/api/people/${id}`;
		const response = await fetch(url, {
			signal: AbortSignal.timeout(500),
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		person.value = json;
	} catch (err) {
		error.value = err.toString();
	} finally {
		loading.value = false;
	}
}

onMounted(getData);
</script>

<style scoped>
@import "../assets/styleDetails.css";
</style>
