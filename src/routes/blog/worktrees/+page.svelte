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

<h2>Creating a worktree</h2>

<p>
	create a new directory and run <code>git worktree add</code>
</p>

<Code prefix="$" code={`!git worktree add`} />

<p>
	the above command will create a new directory and create a new worktree in
	that directory.
</p>

<p>
	you can also create a new worktree in the current directory by running <code
		>git worktree add .</code
	>
</p>

<Code prefix="$" code={`git worktree add .`} />

<p>the above command will create a new worktree in the current directory.</p>

<h2>Listing worktrees</h2>

<p>
	list all the worktrees in the current directory by running <code
		>git worktree list</code
	>
</p>

<Code prefix="$" code={`git worktree list`} />

<p>the above command will list all the worktrees in the current directory.</p>

<h2>Checking out a worktree</h2>

<p>
	check out a worktree by running <code>git worktree checkout</code>
</p>

<Code prefix="$" code={`git worktree checkout`} />

<p>the above command will check out the worktree in the current directory.</p>

<h2>Deleting a worktree</h2>

<p>
	delete a worktree by running <code>git worktree prune</code>
</p>

<Code prefix="$" code={`git worktree prune`} />

<p>the above command will delete the worktree in the current directory.</p>

<h2>Adding a remote</h2>

<p>
	add a remote by running <code>git remote add</code>
</p>

<Code prefix="$" code={`git remote add`} />

<p>the above command will add a remote to the current directory.</p>

<h2>Listing remotes</h2>

<p>
	list all the remotes in the current directory by running <code
		>git remote list</code
	>
</p>

<Code prefix="$" code={`git remote list`} />

<p>the above command will list all the remotes in the current directory.</p>

<h2>Removing a remote</h2>

<p>
	remove a remote by running <code>git remote rm</code>
</p>

<Code prefix="$" code={`git remote rm`} />

<p>the above command will remove a remote from the current directory.</p>

<h2>Adding a remote branch</h2>

<p>
	add a remote branch by running <code>git branch --track</code>
</p>

<Code prefix="$" code={`git branch --track`} />

<p>the above command will add a remote branch to the current directory.</p>

<h2>Listing remote branches</h2>

<p>
	list all the remote branches in the current directory by running <code
		>git branch -r</code
	>
</p>

<Code prefix="$" code={`git branch -r`} />

<p>
	the above command will list all the remote branches in the current directory.
</p>

<h2>Removing a remote branch</h2>

<p>
	remove a remote branch by running <code>git branch -d</code>
</p>

<Code prefix="$" code={`git branch -d`} />

<p>the above command will remove a remote branch from the current directory.</p>

<h2>Adding a remote tracking branch</h2>

<p>
	add a remote tracking branch by running <code>git branch --set-upstream</code>
</p>

<Code prefix="$" code={`git branch --set-upstream`} />

<p>
	the above command will add a remote tracking branch to the current directory.
</p>

<h2>Listing remote tracking branches</h2>

<p>
	list all the remote tracking branches in the current directory by running <code
		>git branch --list --column</code
	>
</p>

<Code prefix="$" code={`git branch --list --column`} />

<p>
	the above command will list all the remote tracking branches in the current
	directory.
</p>

<h2>Removing a remote tracking branch</h2>

<p>
	remove a remote tracking branch by running <code
		>git branch --unset-upstream</code
	>
</p>

<Code prefix="$" code={`git branch --unset-upstream`} />

<p>
	the above command will remove a remote tracking branch from the current
	directory.
</p>
