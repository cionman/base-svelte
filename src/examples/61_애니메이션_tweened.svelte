<script>
  import { tweened } from 'svelte/motion'
  import { linear } from 'svelte/easing'

  const number = tweened(1, {
    duration: 1000,
    // easing: linear  // Default value!
  })

  $: fixedNumber = $number.toFixed(2)
</script>
<pre>
    {'tweened는 지정된 값을 정해진 시간 동안 업데이트하는 재미있는 기능으로 스토어 객체를 반환하는 것에 주의해야 합니다.\n' +
    '다음과 같이 작성할 수 있습니다.\n' +
    '\n' +
    'import { tweened } from \'svelte/motion\'\n' +
    '\n' +
    'const store = tweened(1, { // 첫 번째 인수로 기본값 설정\n' +
    '  delay: 0, // 값을 업데이트 하기 전에 대기 시간\n' +
    '  duration: 400, // 값을 업데이트 하는 시간\n' +
    '  easing: t => t, // Same as `linear`, 타이밍 함수\n' +
    '  interpolate: (a, b) => t => value // 보간 함수\n' +
    '})\n' +
    'tweened가 스토어 객체를 반환하기 때문에 number을 업데이트하기 위해 $($number += 1)를 사용합니다.\n' +
    'number.update(n => n + 1)과 같이 update 메소드를 사용할 수도 있습니다.'}
</pre>
<h1>
    {fixedNumber}
</h1>
<button on:click={() => $number += 1}>
    Increase!
</button>
