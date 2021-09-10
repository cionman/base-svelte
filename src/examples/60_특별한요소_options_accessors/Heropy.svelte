<!--
<svelte:options accessors />
-->

<script>
  let age = 85
  export let name = 'Heropy'
  export function getAge() {
    console.log(age)
  }
</script>

<h1 on:click={getAge}>{name}!</h1>
