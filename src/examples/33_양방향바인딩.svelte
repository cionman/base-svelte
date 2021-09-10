<script>
  import Todo from './33_양방향바인딩/Todo.svelte'

  let todos = [
    { id: 1, title: 'Breakfast', done: false },
    { id: 2, title: 'Lunch', done: false },
    { id: 3, title: 'Dinner', done: false }
  ]
</script>
<pre>
자식 컴포넌트가 부모로부터 전달받은 Props를 내부에서 수정(할당)하는 경우, 부모 컴포넌트에선 반응성을 가지지 않습니다.
만약 자식에서 수정한 Props가 부모 컴포넌트에서도 반응성을 유지하려면 bind 지시어를 사용해 양방향으로 연결해야 합니다.

편리한 방법이지만, 데이터의 유효범위 관리를 위해 이 방법을 남발하지 않는 것이 좋습니다.
</pre>
{#each todos as todo, index (todo.id)}
    <Todo
            bind:todos
            {todo}
            {index} />
{/each}
