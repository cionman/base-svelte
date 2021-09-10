<script>
  let toggle = true
  let width = 200

  function hello(node, options = {}) {
    console.log('Init hello function!')
    const {
      width = '100px',
      height = '100px',
      color = 'tomato'
    } = options
    node.style.width = width
    node.style.height = height
    node.style.backgroundColor = color

    return {
      update: (opts) => {
        console.log('update!', opts)
      },
      destroy: () => {
        console.log('destroy!')
      }
    }
  }
</script>
<pre>
    {'use 지시어를 사용해 연결된 요소가 생성될 때 호출할 함수를 지정할 수 있습니다.\n' +
    '이 함수를 ‘액션(Action)’이라고 합니다.\n' +
    '요소를 사용하는 플러그인(모듈)을 제작할 때 유용합니다.\n' +
    '\n' +
    '<요소 use:함수이름></요소>\n' +
    '<요소 use:함수이름={인수}></요소>\n' +
    '연결된 함수는 다음과 같은 구조를 가집니다.\n' +
    '\n' +
    'function 함수이름(요소, 인수) {\n' +
    '  // Logic..\n' +
    '  return {\n' +
    '    update(인수) {}, // \'인수\'가 변경되면 실행됩니다.\n' +
    '    destroy() {} // \'요소\'가 제거되면 실행됩니다.\n' +
    '  }\n' +
    '}'}
</pre>
<button on:click={() => toggle = !toggle}>
    Toggle!
</button>
<button on:click={() => width += 20}>
    Size up!
</button>

<div use:hello></div>
{#if toggle}
    <div use:hello={{
    width: `${width}px`,
    color: 'royalblue'
  }}></div>
{/if}
