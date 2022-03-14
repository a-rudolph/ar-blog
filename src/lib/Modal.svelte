<script>
  export let modalId;
</script>

<input type="checkbox" id={modalId} class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <slot />
    <div class="modal-action">
      <label for={modalId} class="btn">Yay!</label>
    </div>
  </div>
</div>
