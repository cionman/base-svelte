<script>
  import { writable } from 'svelte/store'
  import Todo from './67_Todo_불필요한_리랜더링방지/Todo.svelte'

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

  function deleteTodo(id) {
    $todos = $todos.filter(t => t.id !== id)
  }
</script>
<pre>
    '08_Todo_예제_만들기' 와 비교
</pre>
<input
        bind:value={title}
        on:keydown={(e) => {e.key === 'Enter' && createTodo()}} />
<button on:click={createTodo}>
    Create Todo
</button>

{#each $todos as todo (todo.id)}
    <Todo {todos} {todo} onDelete={deleteTodo}/>
{/each}
