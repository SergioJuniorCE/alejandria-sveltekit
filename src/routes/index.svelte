<script context="module">
	import { request } from '$lib/utils';
	export async function load() {
		const data = await request('get', '/universities');
		if (data.hasOwnProperty('error')) {
			return {
				props: {
					error: data['error']
				}
			};
		}
		return {
			props: {
				universities: data
			}
		};
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import Select from 'svelte-select';

	import TableCompact from '../components/TableCompact.svelte';

	export let universities: any[];

	let items: any[];
	let value: string;

	onMount(() => {
		try {
			items = universities.map((university) => {
				return {
					value: university.name,
					label: university.name
				};
			});
		} catch (error) {
			items = [1, 2, 3];
			console.log(error);
		}
		value = items[0];
	});

	function handleSelect(event: { detail: any }) {
		console.log('selected item', event.detail);
	}
</script>

<div class="container mx-auto">
	<div class="text-center">
		<h1>Alejandria</h1>
		<p>Vale verga la escuela</p>
	</div>
	<br />
	<label for="select">Universidades</label>
	<div class="max-w-md shadow-md rounded" style="color: black">
		<Select {items} {value} on:select={handleSelect} id="select" />
	</div>
	
</div>
