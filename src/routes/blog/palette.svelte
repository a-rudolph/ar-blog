<script>
  import Code from "$lib/Code.svelte";
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
