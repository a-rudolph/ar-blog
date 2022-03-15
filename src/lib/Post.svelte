<script>
  export let id;
  export let title;
  export let date;
  export let teaser;
</script>

<div class="pv-3 mb-7">
  <a href={`/blog/${id}`}>
    <button>
      <div class="flex justify-between items-baseline">
        <h2 class="text-cyan-400 my-3">{title}</h2>
        <div>{date}</div>
      </div>

      <div class="text-justify pb-2">
        {teaser}
      </div>
    </button>
  </a>
</div>
