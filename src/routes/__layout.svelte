<script>
  import "../app.css";
</script>

<svelte:head>
  <title>ar-blog</title>
</svelte:head>

<main class="h-screen bg-stone-800">
  <div class="container prose mx-auto px-4 pt-[40px] text-slate-400">
    <slot />
  </div>
</main>
