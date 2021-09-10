<script>
  import { lifecycle, delayRender } from './11_라이프사이클_모듈화/lifecycle.js'
  import Something from './11_라이프사이클_모듈화/Something.svelte'

  let done = delayRender()
  lifecycle()
</script>
<p>Svelte의 라이프 사이클은 컴포넌트 외부에서도 정의할 수 있기 때문에, 모듈로 만들 수 있습니다.</p>
{#if $done}
    <h1>Hello Lifecycle!</h1>
{/if}
<Something />
