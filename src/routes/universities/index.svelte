<script context="module">
	import axios from 'axios';

	export async function load({ page, fetch, session, context }) {
		const res = await axios({
			method: 'get',
			url: 'https://api.github.com/graphql'
		});
    const data = await res.data;
		return {
			props: {
				data
			}
		};
	}
</script>

<script lang="ts">
	export let data: any;
</script>

{JSON.stringify(data)}
