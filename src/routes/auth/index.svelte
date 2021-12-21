<script lang="ts">
	import OAuth2 from '../../components/OAuth2.svelte';

	let discordUrl =
		'https://discord.com/api/oauth2/authorize?client_id=922226496721014894&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=identify%20email';
</script>

<div class="container text-center">
	<div>
		<OAuth2 url={discordUrl} name="Discord" />
	</div>
	<div>
		<OAuth2 url={'/'} name="Google" />
	</div>
	<div>
		<OAuth2 url={'/'} name="Twitter" />
	</div>
	<div class="input-group mb-3">
		<input
			type="text"
			class="form-control"
			placeholder="Username"
			aria-label="Username"
			aria-describedby="basic-addon1"
		/>
	</div>
	<div class="input-group mb-3">
		<input
			type="password"
			class="form-control"
			placeholder="Password"
			aria-label="Password"
			aria-describedby="addon-wrapping"
		/>
	</div>
	<button class="btn btn-primary">Login</button>
</div>
