<script>
  import Code from "$lib/Code.svelte";
  import paletteStash from "$lib/assets/palette-stash.png";
</script>

<h1>Coder's palette</h1>
<p>
  Use <span class="text-orange-400"
    ><kbd class="kbd">ctrl</kbd>
    +
    <kbd class="kbd">shift</kbd>
    +
    <kbd class="kbd">p</kbd></span
  > to open the command palette. In the command palette you can search through all
  the commands available in vs code. You will also find the shortcuts for each command,
  so as you use them more and more you may also remember the keyboard shortcuts.
  I used this to learn how to fold and unfold sections of code without using needing
  to use the mouse.
</p>
<p>
  You can do literally anything from the command palette; copy and pasting (you
  should probably know this shortcut already), creating new files, save all
  files, git commands like creating a branch, staging, committing changes,
  publishing a branch, etc.
</p>
<h2>Git commands</h2>
<p>
  there are some less common git commands that are quite useful, but I don't use
  often enough to remember exactly how they are executed. Git stash I use almost
  exclusively from the command palette.
</p>

<img src={paletteStash} alt="type stash into the command palette" />

<h2>settings.json</h2>
<p>
  search for <span class="text-orange-400"
    ><kbd class="kbd">settings.json</kbd></span
  > in the command palette. This file is very useful when trying to sync editor settings
  across multiple computers (or multiple developers). I have a private github repo
  with this file in case I am ever working on a new device. It makes it easy to copy
  over all the settings I am used to having configured.
</p>
<Code
  code={`// settings.json

{
// ...
  "workbench.colorTheme": "Default Dark+",
  "window.zoomLevel": 1.3,
// ...
}
`}
/>
