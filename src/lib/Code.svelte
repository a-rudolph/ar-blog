<script>
	export let code;
	export let prefix;

	import { cx } from '$lib/utils/classnames';

	const lines = code.split('\n');
</script>

<div class="not-prose mockup-code">
	{#each lines as line, i}
		{@const isEmphasized = line[0] === '!'}
		<pre
			class={cx({
				'border-l-orange-400 border-l-4 text-orange-400': isEmphasized
			})}
			data-prefix={prefix || i + 1}><code
				>{isEmphasized ? line.slice(1, line.length) : line}</code
			></pre>
	{/each}
</div>
