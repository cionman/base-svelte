<script>
  let innerHTML = ''
  let textContent = 'Hello world!'
</script>
<pre>
Svelte는 Contenteditable(내용 수정이 가능한) 요소에 연결할 수 있는, innerHTML과 textContent 속성을 제공합니다.
Contenteditable 요소도 하나의 입력 요소이기 때문에 bind 지시어를 통해서 양방향으로 데이터를 연결합니다.
</pre>
<div
        contenteditable
        bind:innerHTML
        bind:textContent>
abc
</div>

<div>{innerHTML}</div>
<div>{textContent}</div>
<div>{@html innerHTML}</div>

<style>
    div {
        border: 1px solid red;
        margin-bottom: 10px;
    }
</style>
