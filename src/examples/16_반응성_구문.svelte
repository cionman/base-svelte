<script>
  import { tick } from 'svelte'

  let count = 0
  $: double = count * 2

  async function assign() {
    count += 1
    console.log(double)
    console.time('timer')
    await tick() // Wait for reactivity..
    console.timeEnd('timer') // 0.1~0.5ms
    console.log(double)
  }
</script>
<pre>
$:은 Label 식별자(Identifier)가 $인 순수한 자바스크립트 Label 구문이며,
Svelte는 이 구문에 특별한 의미를 부여하고 반응성을 자동으로 계측합니다.
let 선언을 사용하지 않는 것에 주의합시다.

데이터 변경이 아닌 반응성을 계측하는 것이기 때문에, 데이터의 변경이 즉각 반영되지 않습니다!
따라서 다음 예제와 같이 tick 라이프 사이클을 사용해 반응성을 기다릴 수 있습니다.
</pre>
<button on:click={assign}>Assign!</button>
<h2>{count}</h2>
<h2>{double}</h2>
