<script>
  export let code;

  const lines = code.split("\n");
</script>

<div class="not-prose mockup-code">
  {#each lines as line, i}
    <pre data-prefix={i + 1}><code>{line}</code
      ></pre>
  {/each}
</div>
