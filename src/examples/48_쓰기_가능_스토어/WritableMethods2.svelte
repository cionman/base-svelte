<script>
  import { name, count } from './store2.js'
</script>

<button on:click={() => {
  $count += 1 // Increase
  $name = 'Neo' // Change name
}}>
    Click me!
</button>

<h2>{$count}</h2>
<h2>{$name}</h2>
