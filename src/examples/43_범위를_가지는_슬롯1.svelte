<script>
  import Heropy from './43_범위를가지는슬롯1/Heropy.svelte'
</script>
<pre>
    {'범위를 가지는 슬롯으로 컴포넌트 내부에서 특정한 값을 꺼내서 사용할 수 있습니다.\n' +
    '다음과 같이 슬롯에 속성과 값을 포함합니다.\n' +
    '\n' +
    '<script>\n' +
    '  let message = \'Hello world!\'\n' +
    '</script>\n' +
    '\n' +
    '<slot myMsg={message}></slot>\n' +
    '그리고 컴포넌트에서 let 지시어를 통해 그 속성을 정의하고 범위 내에서 변수(데이터)처럼 사용할 수 있습니다.\n' +
    '\n' +
    '<script>\n' +
    '  import Heropy from \'~/components/Heropy.svelte\'\n' +
    '</script>\n' +
    '\n' +
    '<Heropy let:myMsg>\n' +
    '  <h2>{myMsg}</h2>\n' +
    '</Heropy>'}
</pre>
<Heropy let:myMsg>
    <h2>{myMsg}</h2>
</Heropy>
