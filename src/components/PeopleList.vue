<template>
	<div class="container-fluid px-4 text-center">
		<h2 class="text-center my-4">List of characters</h2>
		<div class="row">
			<div
				v-for="(person, index) in people"
				:key="index"
				class="list-unstyled col-sm-12 col-md-4 col-lg-3"
			>
				<router-link
					:to="`/people/${index + 1}`"
					class="text-decoration-none btn"
				>
					{{ person.name }}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const people = ref([]);

async function getData() {
	try {
		const url = "https://swapi.info/api/people";
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();

		class Person {
			constructor(name, urlPerson) {
				this.name = name;
				this.url = urlPerson;
			}
		}
		json.forEach((personData) => {
			const person = new Person(personData.name, personData.url);

			people.value.push(person);
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
