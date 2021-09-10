<script>
  let href = 'https://heropy.blog'
  let name = 'Heropy'
  let value = 'New input value!'
  let isUpperCase = false
</script>
<p>
    {'{'} {'}'}(중괄호)를 사용해 데이터를 속성/내용 등에 보간할 수 있습니다.
</p>
<!-- 속성과 내용의 단방향 연결 -->
<a {href}>{name}</a>

<!-- 입력 요소 양방향 연결 -->
<input
        {value}
        on:input={e => value = e.target.value} />

<!-- bind 지시어로 양방향 연결 -->
<input bind:value />

<!-- 표현식 -->
<div>{isUpperCase ? 'DIV' : 'div'}</div>
