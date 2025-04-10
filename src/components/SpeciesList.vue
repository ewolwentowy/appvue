<template>
	<div class="container-fluid px-4 text-center">
		<h2 class="text-center my-4">Species list</h2>
		<div class="row">
			<div
				v-for="(type, index) in species"
				:key="index"
				class="list-unstyled col-sm-12 col-md-4 col-lg-3"
			>
				<router-link
					:to="`/species/${index + 1}`"
					class="text-decoration-none btn"
				>
					{{ type.name }}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const species = ref([]);

async function getData() {
	try {
		const url = "https://swapi.info/api/species";
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();

		class Type {
			constructor(name, urlType) {
				this.name = name;
				this.url = urlType;
			}
		}
		json.forEach((typeData) => {
			const type = new Type(typeData.name, typeData.url);

			species.value.push(type);
		});
	} catch (error) {
		console.error(error.message);
	}
}

onMounted(getData);
</script>

<style scoped>
h2 {
	color: rgb(255, 232, 31);
}
.container-fluid {
	background-color: #30303033;
}

.list-unstyled {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 5px;
	height: 50px;
	text-align: center;
}
.row {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	padding: auto;
	max-width: 75%;
	min-height: 100vh;
}
.btn {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5px;
	height: 50px;
	width: 250px;
	color: rgb(255, 232, 31);
	font-size: 18px;
	font-weight: 500;
	border: 2px solid rgb(255, 232, 31);
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
