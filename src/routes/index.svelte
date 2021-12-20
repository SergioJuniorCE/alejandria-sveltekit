<script lang='ts'>
  import Select from 'svelte-select';

  import { universities } from '../stores/stores'; 

  let items = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'pizza', label: 'Pizza'},
    {value: 'cake', label: 'Cake'},
    {value: 'chips', label: 'Chips'},
    {value: 'ice-cream', label: 'Ice Cream'},
  ];

  let value = {value: 'cake', label: 'Cake'};

  function handleSelect(event) {
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
  <p class="">Universiasddades</p>
	<Select {items} {value} on:select={handleSelect}></Select>

  {#each $universities as university}
    <p>{university}</p>
  {/each}
</div>