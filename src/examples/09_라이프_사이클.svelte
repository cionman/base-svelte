<script>
  import { beforeUpdate, afterUpdate, onMount, onDestroy } from 'svelte'
  import Something from './09_라이프_사이클/Something.svelte'

  let toggle = false

  beforeUpdate(() => console.log('Before update!'))
  afterUpdate(() => console.log('After update!'))
  onMount(() => console.log('Mounted!'))
  onDestroy(() => console.log('Before Destroy!'))
</script>

<button on:click={() => {toggle = !toggle}}>
    Toggle
</button>

{#if toggle}
    <Something />
{/if}
