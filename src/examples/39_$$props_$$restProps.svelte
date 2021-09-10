<script>
  import TextField from './39_$$props_$$restProps/TextField.svelte'

  let id = ''
  let pw = ''

  function submit() {
    //
  }
</script>
<pre>
    {'Svelte는 컴포넌트가 전달받는 모든 Props의 정보를 가진 객체($$props)를 제공합니다.\n' +
    '따라서 전달받을 Props를 모두 명시하지 않아도 사용할 수 있는 장점이 있습니다.\n' +
    '혹은 명시한 Props를 제외한 나머지만 다룰 수 있는 객체($$restProps)도 제공합니다.\n' +
    '\n' +
    '이름\t설명\n' +
    '$$props\t컴포넌트에 전달된 모든 Props 정보를 가진 객체입니다.\n' +
    '$$restProps\t컴포넌트에 명시된 Props를 제외한, 나머지 Props 정보를 가진 객체입니다.\n' +
    '다음 예제에서 TextField 컴포넌트에 명시된 Props는 value와 color입니다.\n' +
    '\n' +
    'value와 color를 포함한,\n' +
    '컴포넌트에 연결된 type, placeholder 같은 모든 Props 정보가 들어있는 객체는 $$props이고,\n' +
    '\n' +
    'value와 color를 제외한,\n' +
    '컴포넌트에 연결된 type, placeholder 같은 Props 정보만 들어있는 객체가 $$restProps입니다.'}
</pre>
<TextField
        bind:value={id}
        color="yellowgreen"
        type="email"
        placeholder="ID!"
        maxlength="10"
        required />

<TextField
        bind:value={pw}
        color="tomato"
        type="password"
        placeholder="Password!"
        required />

<button on:click={submit}>
    Submit!
</button>
<!-- <div>{id} / {pw}</div> -->
