<script lang="ts">
	import axios from 'axios';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let code = $page.query.get('code');
	let token: string;

	onMount(async () => {
		const res = await fetch('localhost:8080/auth/token', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				code: code
			}),
			redirect: 'follow'
		});
		const data = await res.json();
    token = data.token;
	});
</script>

<h1>Logged in</h1>
<p>code {code}</p>
<p>token {token}</p>
