<script>
  import Count from './26_키블록/Count.svelte'
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte'
  let reset = false
  beforeUpdate(() => console.log('Before update!'))
  afterUpdate(() => console.log('After update!'))
  onMount(() => console.log('Mounted!'))
  onDestroy(() => console.log('Before Destroy!'))
</script>
<pre>
키 블록은 연결된 데이터가 변경되면 블록 안의 내용을 화면에 다시 렌더링합니다.
블록 안에서 Svelte 컴포넌트를 사용하는 경우,
컴포넌트가 다시 초기화되고 연결(Mount)됩니다.
</pre>
{#key reset}
    <Count />
{/key}

<button on:click={() => reset = !reset}>
    Reset!
</button>
