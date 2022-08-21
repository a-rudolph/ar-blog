<script>
  import "../app.css";
</script>

<svelte:head>
  <title>ar-blog</title>
</svelte:head>

<main class="min-h-screen bg-stone-800">
  <div class="container prose mx-auto p-4 pt-[40px] text-slate-400">
    <slot />
  </div>
</main>
