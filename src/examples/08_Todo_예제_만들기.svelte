<script>
  import { writable } from 'svelte/store'
  import Todo from './08_Todo_예제/Todo.svelte'

  let title = ''
  let todos = writable([])
  let id = 0

  function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
      array.push({
        id: i,
        title: `할 일 ${i}`,
      });
    }
    return array;
  }
  $todos = createBulkTodos()
  function createTodo() {
    if (!title.trim()) {
      title = ''
      return
    }
    $todos.push({
      id,
      title
    })
    $todos = $todos
    title = ''
    id += 1
  }
</script>

<input
        bind:value={title}
        on:keydown={(e) => {e.key === 'Enter' && createTodo()}} />
<button on:click={createTodo}>
    Create Todo
</button>

{#each $todos as todo (todo.id)}
    <Todo {todos} {todo} />
{/each}
