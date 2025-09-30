import { createRouter, createWebHistory } from "vue-router";
import People from "../views/People.vue";
import Planets from "../views/Planets.vue";
import Species from "../views/Species.vue";
import Home from "../views/Home.vue";
import PeopleDetails from "@/components/PeopleDetails.vue";
import NotFoundViev from "@/components/NotFoundViev.vue";
import PlanetDetails from "@/components/PlanetDetails.vue";
import SpeciesDetails from "@/components/SpeciesDetails.vue";

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
			path: "/species",
			name: "species",
			component: Species,
		},
		{
			path: "/people/:id",
			props: true,
			component: PeopleDetails,
		},
		{
			path: "/planets/:id",
			props: true,
			component: PlanetDetails,
		},
		{
			path: "/species/:id",
			props: true,
			component: SpeciesDetails,
		},
		{
			path: "/:pathName(.*)",
			name: "NotFound",
			component: NotFoundViev,
		},
	],
});

export default router;
