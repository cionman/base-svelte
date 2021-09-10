<script>
  import { afterUpdate } from 'svelte'

  export let fruit
  // 기존 fruit === 새로운 fruit
  let updateCount = 0

  afterUpdate(() => {
    updateCount += 1
  })
</script>

 <svelte:options immutable />

<div>{fruit.name}({updateCount})</div>
