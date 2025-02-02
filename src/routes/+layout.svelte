<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="max-w-screen px-4">
	{@render children()}
</div>
