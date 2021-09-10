<script>
  let name = 'Heropy'
  let index = 0
</script>
<pre>
데이터가 변경되면 이를 감지해 로그를 작성합니다.
개발자 도구가 열려있는 경우엔 프로세스를 일시정시합니다.
HTML 구조에서 데이터 변경 감지를 작성할 때 유용하겠지만,
개인적으로 자주 사용하고 있진 않습니다.
</pre>
{@debug index, name}
<h1 on:click={() => {index += 1}}>
    Hello {name}!
</h1>
