<script>
  import Code from "$lib/Code.svelte";
  import paletteStash from "$lib/assets/palette-stash.png";
</script>

<p>this is the palette page vs code has a lot abilities.</p>
<p>
  <kbd class="kbd">ctrl</kbd>
  +
  <kbd class="kbd">shift</kbd>
  +
  <kbd class="kbd">p</kbd>
</p>
<h2>settings.json</h2>
<p>
  probably the most common thing i use the command palette these days is to get
  to my settings.json
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

<h2>Uncommon Git commands</h2>
<p>
  there are some less common git commands that are quite use but I don't use
  often enough to really remember all the options
</p>
<h3>stashing & popping</h3>
<p class="text-justify">
  how many times have you started going down a certain path and you start to
  think that there might have been another solution. you've done enough work
  that it's worth saving but not working well enough to commit. if it's small
  just comment it out, but sometimes it could span many files. stash away your
  current changes and your left with your last commit. you can give the stash a
  name if you want to id it later.
</p>
<img src={paletteStash} alt="type stash into the command palette" />
<p>
  if you want to bring the changes back, pop the stash and it'll be reapply to
  your branch. search for
  <code>pop stash</code>
  to get your stash back.
</p>
