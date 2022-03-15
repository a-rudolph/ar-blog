<script>
  import { goto } from "$app/navigation";

  export let id;
  export let title;
  export let date;
  export let teaser;
</script>

<div class="pv-3 mb-7">
  <button on:click={goto(`/blog/${id}`)}>
    <div class="flex justify-between items-baseline">
      <h2 class="text-cyan-400 mt-3 mb-3">{title}</h2>
      <div>{date}</div>
    </div>

    <div class="text-justify pb-2">
      {teaser}
    </div>
  </button>
</div>
