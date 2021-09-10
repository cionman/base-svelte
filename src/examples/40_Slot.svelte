<script>
  import Hello from './40_Slot/Hello.svelte'
</script>
<pre>
{'슬롯(Slot)은 컴포넌트의 내용(Content)입니다.\n' +
'요소(Element)의 내용(Content)과 개념이 같습니다.\n' +
'\n' +
'단지 컴포넌트의 내용이 어디에 삽입(출력)될 것인지만 <slot>로 지정하면 됩니다.\n' +
'다음은 위 예제에서 사용한 Hello 컴포넌트입니다.'}
</pre>
<!--요소의 내용-->
<h1>Hello world!</h1>

<!--컴포넌트의 내용-->
<Hello>Hello world!</Hello>
