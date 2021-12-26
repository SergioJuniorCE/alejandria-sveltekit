<script context="module">
	import { request } from '$lib/utils';
	export async function load({ fetch }) {
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
	import Select from 'svelte-select';
	import { onMount } from 'svelte';
	export let universities: any[];

	let items = universities.map((university) => ({
		value: university.name,
		label: university.name
	}));

	let value = items[0];

	onMount(() => {
		try {
			universities.map((university) => {
				return {
					value: university.name,
					label: university.name
				};
			});
		} catch (error) {
			console.log(error);
		}
	});

	function handleSelect(event: { detail: any }) {
		console.log('selected item', event.detail);
	}
</script>

<div class="container">
	<div class="text-center">
		<hr />
		<h1>Alejandria</h1>
		<p>Vale verga la escuela</p>
		<hr />
	</div>

	<Select {items} {value} on:select={handleSelect} />

	<!-- Create a table of topics -->
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Created</th>
				<th>Updated</th>
			</tr>
		</thead>
		<tbody>
			{#each universities as university}
				<tr>
					<td>{university.name}</td>
					<td>{university.description}</td>
					<td>{university.createdAt}</td>
					<td>{university.updatedAt}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
