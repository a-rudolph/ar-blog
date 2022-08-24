<script>
	import Code from '$lib/Code.svelte';
</script>

<h1>Git worktrees</h1>

<ul>
	<li>useful for longterm projects</li>
	<li>
		also useful if you just want to check out a branch and don't want to lose
		all your work
	</li>
	<li>need to do a quick bugfix</li>
	<li>
		see something questionable in a PR, check it out quickly and test it out
	</li>
	<li>
		working on the antd upgrade? you can have antd v4 installed in that
		directory so that you don't need to reinstall node_modules each time you
		switch back and forth
	</li>
</ul>

<p>
	for more info check out the<a
		class="ml-2"
		href="https://git-scm.com/docs/git-worktree">documentation</a
	>.
</p>

<h2>Creating a worktree</h2>

<p>
	create a new directory and run <code>git worktree add</code>
</p>

<Code prefix="$" code={`!git worktree add`} />

<p>
	the above command will create a new directory and create a new worktree in
	that directory.
</p>
