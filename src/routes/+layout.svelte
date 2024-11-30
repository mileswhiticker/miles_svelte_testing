<script>
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
	<a href="/blog">blog</a>
	<a href="/todos">todos</a>
	<a href="/threlte">Threlte</a>
</nav>

{@render children()}