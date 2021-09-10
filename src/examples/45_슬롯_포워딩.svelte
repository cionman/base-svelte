<script>
  import Parent from './45_슬롯_포워딩/Parent.svelte'
</script>
<pre>
슬롯 포워딩은 부모 컴포넌트로부터 전달(Forwarding)받은 내용(Content)을 자식 컴포넌트의 내용으로 슬롯(Slot)을 이용해 전달하는 것을 의미합니다.
앞서 살펴본 단일 슬롯, 이름을 가지는 슬롯, 범위를 가지는 슬롯 모두 자식 컴포넌트로 전달할 수 있습니다.
</pre>
<Parent let:scoped>
    <h2>Default slot..</h2>
    <h3 slot="named">Named slot..</h3>
    <h1 slot="scoped">Scoped slot.. {scoped}</h1>
</Parent>
