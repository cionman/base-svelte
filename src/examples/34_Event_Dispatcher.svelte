<script>
  import Todo from './34_EventDispatcher/Todo.svelte'

  let todos = [
    { id: 1, title: 'Breakfast', done: false },
    { id: 2, title: 'Lunch', done: false },
    { id: 3, title: 'Dinner', done: false }
  ]

  function deleteTodo(event) {
    // event.detail => `new CustomEvent()`를 통해 이벤트를 초기화 할 때 전달 된 모든 데이터를 반환
    const todo = event.detail.todo
    const index = todos.findIndex(t => t.id === todo.id)
    console.log(todo)
    todos.splice(index, 1)
    todos = todos
  }
</script>
<pre>
Props가 부모에서 자식으로 데이터를 전달하는 방법이라면,
Event Dispatcher는 자식에서 부모로 데이터(이벤트)를 전달하는 방법입니다.

자식 컴포넌트에서 데이터를 포함하는 이벤트를 발생시키고,
부모 컴포넌트에선 그 이벤트를 수신한 핸들러에서 데이터를 꺼내는 방식입니다.

자식 컴포넌트(Child.svelte)에서 사용하는 기본 구조는 다음과 같습니다.
    {'<script>\n' +
    '  import { createEventDispatcher } from \'svelte\'\n' +
    '  const dispatch = createEventDispatcher()\n' +
    '\n' +
    '  const 전달할_데이터 = \'나는 데이터!\'\n' +
    '  dispatch(\'이벤트_이름\', 전달할_데이터)\n' +
    '</script>'}

    부모 컴포넌트에서 사용하는 기본 구조는 다음과 같습니다.
    {'<script>\n' +
    '  import Child from \'./Child.svelte\'\n' +
    '</script>\n' +
    '\n' +
    '<Child on:이벤트_이름={event => {\n' +
    '  console.log(event.detail) // \'나는 데이터!\' \n' +
    '}} />'}
</pre>
{#each todos as todo (todo.id)}
    <Todo
            {todo}
            on:deleteMe={deleteTodo} />
{/each}
