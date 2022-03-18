<script>
  import "../app.css";
</script>

<svelte:head>
  <title>ar-blog</title>
</svelte:head>

<main class="min-h-screen p-4 bg-stone-800">
  <div class="container prose mx-auto px-4 pt-[40px] text-slate-400">
    <slot />
  </div>
</main>
