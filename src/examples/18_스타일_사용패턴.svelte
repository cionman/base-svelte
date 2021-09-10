<script>
  let active = true
  let valid = false
  let camelCase = true
  let color = {
    white: '#FFF',
    red: '#FF0000'
  }
  let bold = 'font-weight: bold;'

  function multiClass() {
    return 'active valid camel-case'
  }
</script>

<div class={active ? 'active' : ''}>
    3항 연산자 보간
</div>

<div class:active={active}>
    Class 지시어(Directive) 바인딩
</div>

<div class:active>
    Class 지시어 바인딩 단축 형태
</div>

<div
        class:active
        class:valid
        class:camelCase
        class:camel-case={camelCase}>
    다중 Class 지시어 바인딩
</div>

<div class={multiClass()}>
    함수 실행
</div>

<div
        class="style-binding"
        style="
    color: {color.white};
    background-color: {color.red};
    {bold}">
    스타일 바인딩
</div>
