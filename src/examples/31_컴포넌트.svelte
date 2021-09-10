<script>
  import { onMount } from 'svelte'
  import Heropy from './31_컴포넌트/Heropy.svelte'

  let heropy

  onMount(() => {
    // Error in REPL, Try in VS Code.
    // console.log(heropy)
    // console.log(heropy.title)
  })
</script>

<Heropy />
<Heropy title="Hello Heropy" />
<Heropy
        title="Hello Neo"
        bind:this={heropy} />
