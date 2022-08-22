<script>
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname !== '/blog'}
	<h2 class="mt-0">
		<a class="link-secondary font-bold prose-heading no-underline" href="/blog">
			ar-blog
		</a>
	</h2>
{/if}

<slot />
