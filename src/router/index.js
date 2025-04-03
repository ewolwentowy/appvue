import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import People from "../views/People.vue";
import Planets from "../views/Planets.vue";
import Vehicles from "../views/Vehicles.vue";
import PeopleDetails from "@/components/PeopleDetails.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/people",
			name: "people",
			component: People,
		},
		{
			path: "/planets",
			name: "planets",
			component: Planets,
		},
		{
			path: "/vehicles",
			name: "vehicles",
			component: Vehicles,
		},
		{
			path: '/people/:id',
			props: true ,
			component: PeopleDetails,
		},
	],
});

export default router;
