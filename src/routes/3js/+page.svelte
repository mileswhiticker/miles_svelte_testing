
<h1>3js</h1>
<p>
	this is the native 3js page.
</p>

<canvas id="c"></canvas>
<script>
	import { main } from './test_scene.js';
	import { onMount } from 'svelte';

	onMount(() => {
	main();
	});
	
</script>
