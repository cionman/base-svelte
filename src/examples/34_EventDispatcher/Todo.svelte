<script>
  import { createEventDispatcher } from 'svelte'

  export let todo

  const dispatch = createEventDispatcher()

  function deleteTodo() {
    // dispatch('deleteMe', todo)
    dispatch('deleteMe', {
      todo
    })
  }
</script>
<div>
    <input
            type="checkbox"
            bind:value={todo.done} />
    {todo.title}
    <button on:click={deleteTodo}>X</button>
</div>
