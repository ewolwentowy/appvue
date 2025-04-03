<template>
	<nav class="navbar navbar-expand-lg bg-dark">
		<div class="container-fluid">
			<router-link to="/" class="text-decoration-none">Home</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarTogglerDemo02"
				aria-controls="navbarTogglerDemo02"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link to="/people" class="text-decoration-none"
							>People</router-link
						>
					</li>
					<li class="nav-item">
						<router-link to="/planets" class="text-decoration-none"
							>Planets</router-link
						>
					</li>
					<li class="nav-item">
						<router-link to="/vehicles" class="text-decoration-none"
							>Vehicles</router-link
						>
					</li>
				</ul>
				<!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
			</div>
		</div>
	</nav>
</template>

<script setup></script>

<style scoped>
.navbar {
	top: 0%;
	height: 60px;
	display: flex;
	align-items: center;

	text-decoration: none;
}
.text-decoration-none {
	display: flex;
	transition: color 0.3s;
	color: rgb(230, 208, 83);
}
.nav-item {
	font-size: 18px;
	margin-left: 20px;
	padding: 0 20px;
}
.container-fluid {
	font-size: 22px;
	font-weight: bold;
	padding-left: 15px;
}
.text-decoration-none:hover {
	color: rgb(248, 250, 235);
}
</style>
