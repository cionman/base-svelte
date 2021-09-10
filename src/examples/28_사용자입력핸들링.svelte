<script>
  let count = 0
</script>
<pre>
on 지시어를 사용해 DOM 이벤트를 작성합니다.
기본 형태는 다음과 같습니다.
</pre>
<button on:click={() => count += 1}>
    Click me!
</button>

<h1>{count}</h1>
