<script>
  import { w, r } from './47_스토어/store.js';

  console.log($w) // 7

  $w = 1;  // w.set(1)
  $w += 1;  // w.update(v => v + 1) // .update()의 콜백에서 반환하는 값이 지정됩니다.

  console.log($w) // 2
</script>
<pre>
Svelte는 자체적으로 스토어(Store)를 지원합니다.
내장된 svelte/store 모듈을 사용하면 됩니다.

readable, writable, derived로 정의된 스토어 객체는 기본적으로 subscribe 메소드를 포함하며,
writable로 정의된 객체는 추가로 set과 update 메소드를 사용할 수 있습니다.

Svelte 컴포넌트에서는 각 메소드를 사용할 필요 없이 $ 접두사로 스토어를 참조할 수 있습니다.
이를 자동 구독(Auto-subscription)이라고 합니다.
자동 구독을 통해 set과 update 메소드를 대신할 수 있어 편리합니다.

Svelte 컴포넌트가 아니면(.js, .ts 파일 같은) 자동 구독을 사용할 수 없기 때문에,
set, update, subscribe 메소드를 직접 사용해야 합니다.
</pre>
