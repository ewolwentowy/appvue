<template>
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
						{{
							person.hair_color.charAt(0).toUpperCase() +
							person.hair_color.slice(1)
						}}
					</td>
				</tr>
				<tr>
					<td>Skin color:</td>
					<td>
						{{
							person.skin_color.charAt(0).toUpperCase() +
							person.skin_color.slice(1)
						}}
					</td>
				</tr>
				<tr>
					<td>Eye color:</td>
					<td>
						{{
							person.eye_color.charAt(0).toUpperCase() +
							person.eye_color.slice(1)
						}}
					</td>
				</tr>
				<tr>
					<td>Birth year:</td>
					<td>{{ person.birth_year }}</td>
				</tr>
				<tr>
					<td>Gender:</td>
					<td>
						{{ person.gender.charAt(0).toUpperCase() + person.gender.slice(1) }}
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
	<div v-else>
		<p>Data loading...</p>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const person = ref();
const route = useRoute();

const id = route.params.id;
async function getData() {
	try {
		const url = `https://swapi.info/api/people/${id}`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		person.value = json;
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
