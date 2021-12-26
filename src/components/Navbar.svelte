<script context="module">
	import { request } from '$lib/utils';
	export async function load({}) {
		const data = await request('get', '/universities');
		return {
			props: {
				universities: data
			}
		};
	}
</script>

<script lang="ts">
	import { browserGet } from '$lib/utils';
	import { onMount } from 'svelte';

	let loggedIn: boolean;
	let jwt: string;

	onMount(async () => {
		jwt = browserGet('jwt');
		if (jwt) {
		}
	});
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container">
		<a class="navbar-brand" href="/">Navbar</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#!">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#!">Link</a>
				</li>
				<li class="nav-item dropdown">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						class="nav-link dropdown-toggle"
						href="#"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Dropdown
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" href="#!">Action</a></li>
						<li><a class="dropdown-item" href="#!">Another action</a></li>
						<li><hr class="dropdown-divider" /></li>
						<li><a class="dropdown-item" href="#!">Something else here</a></li>
					</ul>
				</li>
				<li class="nav-item">
					<a href="#!" class="nav-link disabled">Disabled</a>
				</li>
			</ul>
			{#if jwt === undefined}
				<form class="d-flex">
					<a href="/auth" class="btn btn-success">Login</a>
				</form>
			{:else}
				
			{/if}
		</div>
	</div>
</nav>
