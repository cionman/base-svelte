<script>
  let active = false
  let color = 'tomato'
  let white = 'white'
  let letterSpacing = 'letter-spacing: 5px;'
</script>

<button on:click={() => {active = !active}}>
    Toggle!
</button>
<pre>
클래스와 스타일은 모두 기본 보간을 통해 데이터를 연결할 수 있습니다.
추가로 클래스는 class 지시어(Directive)를 제공하는데,
이를 통해 좀 더 단순한 문법으로 작성할 수 있습니다.
</pre>
<!-- <div class={active ? 'active' : ''}> -->
<div class:active={active}>
    Hello
</div>

<h2 style="
  background-color: {color};
  color: {white};
  {letterSpacing}">
    Heropy!
</h2>

<style>
    div {
        width: 120px;
        height: 200px;
        background: royalblue;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 20px;
        transition: .4s;
    }
    .active {
        width: 250px;
        background: tomato;
    }
</style>
