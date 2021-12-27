<script lang="ts">
	import '../tailwind.css';
	import '../app.css';
	import Navbar from '$components/Navbar.svelte';
</script>

<Navbar />
<div class="">
	<slot />
</div>
