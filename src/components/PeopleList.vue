<template>
	<div class="container px-4 text-center">
		<h2 class="text-center my-4">Lista postaci</h2>
		<div class="row">
			<div
				v-for="(person, index) in people"
				:key="index"
				class="list-unstyled col-3"
			>
				<router-link
					:to="`/people/${index + 1}`"
					class="text-decoration-none text-dark"
                    
				>
					{{ person.name }}
				</router-link>
			</div>
		</div>
	</div>

  <PeopleDetails />


</template>

<script setup>
import { ref, onMounted } from "vue";
import PeopleDetails from "./PeopleDetails.vue";

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
.list-unstyled {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 10px;
    background: #eceaea;
	padding: auto;
	height: 50px;
	text-align: center;
	border: 2px solid black;
	border-radius: 10px;
}
.row {
	min-height: 100vh;
	max-width: 75%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	padding: auto;
}
</style>
