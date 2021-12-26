<script lang="ts">
	import axios from 'axios';
	import { validateEmail } from '$lib/utils';

  import { goto } from '$app/navigation'

	let email: string;
	let password: string;
	let password2: string;

	async function handleRegister() {
		if (!validateEmail(email)) alert('Email is not valid');
		if (password !== password2) alert('Passwords do not match');
		if (validateEmail(email) && password === password2) {
			const user = await axios({
				method: 'POST',
				url: 'http://localhost:8080/auth/local/register',
				data: {
					email,
					password
				}
			});
      if (!user) {
        alert('User already exists');
      } else {
        alert('User created');
        await goto('/auth', {
          replaceState: true
        });
      }
		}
	}
</script>

<!-- bootstrap input group for email and password -->
<div class="container mt-5">
	<h1>Register</h1>
	<form action="/auth" on:submit={handleRegister}>
		<div class="form-group">
			<label for="email">Email address</label>
			<input
				type="email"
				class="form-control"
				id="email"
				aria-describedby="emailHelp"
				placeholder="Enter email"
				bind:value={email}
			/>
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input
				type="password"
				class="form-control"
				id="password"
				placeholder="Password"
				bind:value={password}
			/>
		</div>
		<div class="form-group">
			<label for="password2">Confirm your password</label>
			<input
				type="password"
				class="form-control"
				id="password2"
				placeholder="Password"
				bind:value={password2}
			/>
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
</div>
