<script>
  import Btn from './41_단일 슬롯과_Fallback_Content/Btn.svelte'
</script>
<pre>
슬롯으로 들어오는 내용이 없는 경우 기본 내용을 지정할 수 있습니다.
이를 ‘Fallback Content’라고 합니다.
Fallback Content는 글자(문장)만 아니라 여러 요소 및 컴포넌트를 포함할 수 있습니다.
{'<slot>Fallback content, 들어오는 내용이 없으면 이 문장을 출력합니다!</slot>'}
</pre>
<Btn></Btn>
<Btn>Submit!</Btn>
<Btn block>Submit!</Btn>
<Btn color="royalblue">Submit!</Btn>
<Btn
        block
        color="red">
    Danger!
</Btn>
