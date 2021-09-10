<script>
  import Readable from './50_읽기_전용_스토어/Readable.svelte'

  let toggle = true
</script>
<pre>
    {'읽기 전용 스토어\n' +
    '값을 읽을 수만 있는 스토어를 생성합니다.\n' +
    '\n' +
    'readable(값)\n' +
    'readable(값, 콜백)\n' +
    '첫 번째 인수는 스토어의 값(초깃값)입니다.\n' +
    '\n' +
    '두 번째 인수는 스토어 구독(자동, 수동)이 발생하면 실행될 콜백입니다.\n' +
    '콜백에서 반환하는 함수는 구독이 모두 취소되면(구독자가 모두 없어지면) 실행됩니다.\n' +
    '읽을 수만 있는 스토어기 때문에 초깃값을 최초 한 번 수정할 수 있도록 콜백에서 set 함수(매개변수)를 사용할 수 있습니다.\n' +
    '\n' +
    'import { readable } from \'svelte/store\'\n' +
    '\n' +
    'export let store = writable(\'값\', set => {\n' +
    '  // 구독자가 1명 이상이 되면 실행!\n' +
    '\n' +
    '  set(\'값\')\n' +
    '  return () => {\n' +
    '    // 구독자가 0명이 되면 실행!\n' +
    '  }\n' +
    '})'}
</pre>
<button on:click={() => toggle = !toggle}>
    Toggle
</button>

{#if toggle}
    <Readable />
{/if}
