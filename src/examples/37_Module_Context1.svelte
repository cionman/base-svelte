<script>
  import Fruit, { count } from './37_Module_Context/Fruit.svelte'

  let fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Mango',
    'Orange'
  ]
</script>
<pre>
{'다음과 같이 context="module" 속성/값을 가지는 SCRIPT 태그에 정의된 내용은,\n' +
'컴포넌트를 사용하기 위해 모듈로 처음 가져오는 상황에 전역으로 한 번 실행됩니다.\n' +
'\n' +
'이 블록 안에서 선언된 값은 해당 컴포넌트 내에서 접근 가능하지만,\n' +
'반대로 <script context="module">가 해당 컴포넌트의 다른 값에는 접근할 수 없습니다.\n' +
'\n' +
'흥미로운 기능이지만 <script context="module"> 내에서 선언된 변수는 값을 재할당해도 반응성(DOM 업데이트)이 없다는 점에 주의해야 합니다.\n' +
'\n' +
'반응성이 없기 때문에 화면 갱신용이 아닌, 단순 전역 데이터처럼 사용하면 됩니다.' +
'<script context="module">\n' +
'  let count = 0\n' +
'</script>' +
'컴포넌트 외부에서도 변수/함수 등을 참조할 수 있도록 export를 사용할 수 있습니다.' +
'<script context="module">\n' +
'  export let count = 0\n' +
'</script>'}
</pre>
<button on:click={() => console.log(count)}>
    Total count log!
</button>

{#each fruits as fruit}
    <Fruit {fruit} />
{/each}
