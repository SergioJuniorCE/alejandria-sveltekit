<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let code = $page.query.get('code');
	let token: string;
  let url = 'http://localhost:8080/auth/token';
	onMount(async () => {
		const res = await fetch(`${url}?code=${code}`);
		const data = await res.json();
    token = data.token;
	});
</script>

<h1>Logged in</h1>
<p>code {code}</p>
<p>token {JSON.stringify(token)}</p>
<p>url {url}</p>
