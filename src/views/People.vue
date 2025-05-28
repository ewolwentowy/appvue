<template>
<AsyncComp/>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import LoadingComponent from "../components/LoadingComponent.vue";
import ErrorComponent from "../components/ErrorComponent.vue";
const AsyncComp = defineAsyncComponent({
	loader: () => import("@/components/PeopleList.vue"),

	loadingComponent: LoadingComponent,

	delay: 200,
	errorComponent: ErrorComponent,

	timeout: 3000,
});
</script>

<style>

</style>