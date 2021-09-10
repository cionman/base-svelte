<script>
  import Heropy from './60_특별한요소_options_accessors/Heropy.svelte'

  let heropy

  function handler() {
    console.log(heropy)
    console.log(heropy.name)
    console.log(heropy.getAge())
  }
</script>
<pre>
{'접근 허용(accessors)\n' +
'외부에서 컴포넌트의 데이터 혹은 함수에 접근을 허용할 때 사용합니다.\n' +
'단, 허용할 데이터나 함수에 export를 사용해야 합니다.\n' +
'<svelte:options accessors={true} />\n' +
'<svelte:options accessors />\n' +
'Heropy 컴포넌트의 옵션을 비활성화하고 테스트해보세요!'}
</pre>
<button on:click={handler}>
    Toggle!
</button>
<Heropy bind:this={heropy} />
