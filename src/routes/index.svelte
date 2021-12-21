<script context="module">
  export async function load({ page, fetch, session, context}) {
    const res = await fetch('http://localhost:8080/universities')
    const data = await res.json();
    return {
      props: {
        universities: data
      }
    }
  }
</script>

<script lang='ts'>
  import Select from 'svelte-select';

  export let universities: any[];

  let items = universities.map((university) => {
    return {
      value: university.name,
      label: university.name
    }
  });

  let value = items[0];

  function handleSelect(event: { detail: any; }) {
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