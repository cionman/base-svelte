<script>
  import Parent from './35_EventForwarding/Parent.svelte'

  function handler(e) {
    console.log(e.currentTarget)
  }
  function myEventHandler(e) {
    console.log(e.detail.myName)
  }
</script>
<pre>
이벤트 포워딩은 자식에서 부모 컴포넌트로 이벤트를 던져 올리는 방법으로,
이벤트 핸들러를 부모 컴포넌트에서 작성할 수 있습니다.

사용법은 아주 간단합니다.
단순히 이벤트의 핸들러를 명시하지 않으면 됩니다.
{'<div on:click>\n' +
'  Forwarding!\n' +
'</div>'}
</pre>
<Parent
        on:click={handler}
        on:myEvent={myEventHandler} />
