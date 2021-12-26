<script lang="ts">
	import { authUser } from '$lib/utils';

	let email: string;
	let password: string;

	async function handleLogin() {
		if (authUser(email, password)) {
			alert('You are logged in');
			window.location.href = '/';
		} else {
			alert('You are not logged in');
		}
	}
</script>

<div class="container text-center">
	<br />
	<div class="input-group mb-3">
		<input
			type="text"
			class="form-control"
			placeholder="Email"
			aria-label="Email"
			aria-describedby="basic-addon1"
			bind:value={email}
		/>
	</div>
	<div class="input-group mb-3">
		<input
			type="password"
			class="form-control"
			placeholder="Password"
			aria-label="Password"
			aria-describedby="addon-wrapping"
			bind:value={password}
		/>
	</div>
	<button on:click={handleLogin}> Login </button>
	<!-- <p class="mb-0 mt-2">Don't have an account? Register now</p> -->
	<a href="auth/register" class="btn btn-primary">Register</a>
</div>
