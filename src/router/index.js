import { createRouter, createWebHistory } from "vue-router";
import PeopleList from "../components/PeopleList.vue";
import PlanetList from "../components/PlanetList.vue";
import Home from "../views/Home.vue";
import PeopleDetails from "@/components/PeopleDetails.vue";
import NotFoundViev from "@/components/NotFoundViev.vue";
import PlanetDetails from "@/components/PlanetDetails.vue";
import SpeciesDetails from "@/components/SpeciesDetails.vue";
import SpeciesList from "@/components/SpeciesList.vue";

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
			component: PeopleList,
		},
		{
			path: "/planets",
			name: "planets",
			component: PlanetList,
		},
		{
			path: "/species",
			name: "species",
			component: SpeciesList,
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
