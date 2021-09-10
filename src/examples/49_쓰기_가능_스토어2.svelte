<script>
  import WritableMethods2 from './48_쓰기_가능_스토어/WritableMethods2.svelte'

  let toggle = true
</script>

<button on:click={() => toggle = !toggle}>
    Toggle
</button>

{#if toggle}
    <WritableMethods2 />
{/if}
