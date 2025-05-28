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
@import "../assets/styleList.css";
</style>
