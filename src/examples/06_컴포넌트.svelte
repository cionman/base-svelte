<script>
  import Fruits from './06_컴포넌트/Fruits.svelte'

  let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango']
</script>
<ul>
    <li>반응성: 데이터의 불변성과 가변성</li>
    <li>컴포넌트: 컴포넌트 개요(with 컴포넌트 바인딩), 부모에서 자식으로(Props)</li>
</ul>
<Fruits {fruits} />
<Fruits {fruits} reverse />
<Fruits {fruits} slice="-2" />
<Fruits {fruits} slice="0, 3" />
