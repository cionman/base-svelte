<script>
  import WritableMethods from './48_쓰기_가능_스토어/WritableMethods.svelte'

  let toggle = true
</script>
<pre>
    {'쓰기 가능 스토어\n' +
    '값을 읽거나 쓸 수 있는 스토어를 생성합니다.\n' +
    '\n' +
    'writable(값)\n' +
    'writable(값, 콜백)\n' +
    '첫 번째 인수는 스토어의 값(초깃값)입니다.\n' +
    '\n' +
    '두 번째 인수는 스토어 구독(자동, 수동)이 발생하면 실행될 콜백입니다.\n' +
    '콜백에서 반환하는 함수는 구독이 모두 취소되면(구독자가 모두 없어지면) 실행됩니다.\n' +
    '\n' +
    'import { writable } from \'svelte/store\'\n' +
    '\n' +
    'export let store = writable(\'값\', () => {\n' +
    '  // 구독자가 1명 이상이 되면 실행!\n' +
    '\n' +
    '  return () => {\n' +
    '    // 구독자가 0명이 되면 실행!\n' +
    '  }\n' +
    '})'}
</pre>
<button on:click={() => toggle = !toggle}>
    Toggle
</button>

{#if toggle}
    <WritableMethods />
{/if}
