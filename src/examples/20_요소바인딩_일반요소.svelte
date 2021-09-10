<script>
  import { tick, onMount } from 'svelte'

  let isShow = false
  let inputEl

  async function toggle() {
    isShow = !isShow
    await tick()
    // const inputEl = document.querySelector('input')
    console.log(inputEl)
    inputEl && inputEl.focus()
  }
</script>
<pre>
DOM에서 검색하지 않아도 bind:this를 통해 바로 요소를 참조할 수 있습니다.

화면에 없던 요소를 데이터를 통해 출력하고 참조하기 위해,
데이터가 변경되고 화면이 갱신될 때까지 기다리도록 tick 라이플 사이클을 사용할 수 있습니다.
</pre>
<button on:click={toggle}>Edit!</button>
{#if isShow}
    <input bind:this={inputEl} />
{/if}
