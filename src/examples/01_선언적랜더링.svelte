<script>
  let name = 'world'
  let age = 85
  function assign() {
    name = 'Heropy'
    age = 36
  }
</script>
<h1>선언적 랜더링</h1>

<ul>
    <li>보간법: 내용/속성/표현식 보간</li>
    <li>반응성: 할당</li>
    <li>클래스와 스타일: 클래스와 스타일 속성 바인딩</li>
    <li>요소 바인딩: 입력 요소 바인딩(Properties, group) 패턴 정리</li>
    <li>사용자 입력 핸들링: 인라인 이벤트 핸들러</li>
</ul>

<h1>Hello {name}!</h1>

<h2 class={age < 85 ? 'active': ''}>
    {age}
</h2>

<img
        src=""
        alt={name} />

<input
        type="text"
        bind:value={name} />

<button on:click={assign}>
    Assign
</button>

<style>
    h1 {
        color: red;
    }
    .active {
        color: blue;
    }
</style>
