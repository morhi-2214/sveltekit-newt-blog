<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="mb-8 mt-4 flex-1 px-4">
		{@render children()}
	</main>
	<Footer />
</div>
