<template>
	<div>
		<h2>Lista pojazdów</h2>
		<ul>
			<li v-for="(machine, index) in vehicles" :key="index">
				{{ machine.name }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const vehicles = ref([]);

async function getData() {
	try {
		const url = "https://swapi.info/api/vehicles";
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();

		
		class Machine {
			constructor(name, urlMachine) {
				this.name = name;
				this.url = urlMachine;
			}
		}
		json.forEach((machineData) => {
			const machine = new Machine(machineData.name, machineData.url);

			vehicles.value.push(machine);
		});
	} catch (error) {
		console.error(error.message);
	}
}

onMounted(getData);
</script>

<style></style>
