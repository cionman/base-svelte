<script>
  import { tick } from 'svelte'

  let name = 'world'

  async function handler() {
    name = 'Heropy'
    await tick()
    const h1 = document.querySelector('h1')
    console.log(h1.innerText) // Hello Heropy!
  }
</script>
<pre>
    반응성 데이터의 변경이 곧 화면의 갱신을 의미하지는 않습니다.
    tick을 사용하면 데이터 변경 후 화면의 갱신까지 기다릴 수 있습니다.
    단, 비동기로 처리해야 합니다.
</pre>
<h1 on:click={handler}>Hello {name}!</h1>
