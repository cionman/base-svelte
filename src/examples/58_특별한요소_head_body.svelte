<script>
  import Heropy from './58_head_body/Heropy.svelte'

  let toggle = false
</script>

<button on:click={() => toggle = !toggle}>
    Toggle!
</button>

{#if toggle}
    <Heropy />
{/if}
