<script>
  export let id;
  export let title;
  export let date;
  export let teaser;
  export let isLink = true;
</script>

<div class="pv-3 mb-7">
  <svelte:element this={isLink ? 'a' : 'div'} href={`/blog/${id}`}>
    <svelte:element this={isLink ? 'button' : 'div'} class="w-full">
      <div class="w-full flex justify-between items-baseline">
        <h2 class="text-accent my-3">{title}</h2>
        <div>{date}</div>
      </div>

      <div class="text-justify pb-2">
        {teaser}
      </div>
    </svelte:element>
  </svelte:element>
</div>
