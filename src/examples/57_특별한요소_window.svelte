<script>
  let key = ''
  let innerWidth
  let innerHeight
  let outerWidth
  let outerHeight
  let online
  let scrollX
  let scrollY
  // window.addEventListener('keydown', event => {
  //   key += event.key
  // })
</script>
<pre>
    {'window\n' +
    '컴포넌트가 파괴(제거)될 때 같이 제거할 Window 이벤트를 추가하거나,\n' +
    'SSR에서 window 객체의 존재를 확인하지 않고도 이벤트를 추가할 때 사용합니다.\n' +
    'bind 지시어를 사용해 아래 명시된 속성들과 연결할 수 있습니다.\n' +
    '\n' +
    '<svelte:window \n' +
    '  on:이벤트={핸들러}\n' +
    '  bind:속성={데이터} />\n' +
    '속성\t특성\t설명\n' +
    'innerWidth\t읽기 전용\t뷰포트의 가로 너비\n' +
    'innerHeight\t읽기 전용\t뷰포트의 가로 너비\n' +
    'outerWidth\t읽기 전용\t브라우저 가로 너비\n' +
    'outerHeight\t읽기 전용\t브라우저 가로 너비\n' +
    'online\t읽기 전용\t네트워크 상태\n' +
    'scrollX\t쓰기 가능\t스크롤 X좌표\n' +
    'scrollY\t쓰기 가능\t스크롤 Y좌표'}
</pre>
<svelte:window
        on:keydown={e => key = e.key}
        bind:innerWidth={innerWidth}
        bind:innerHeight
        bind:outerWidth
        bind:outerHeight
        bind:online
        bind:scrollX
        bind:scrollY />

<h1>{key}</h1>
<div>innerWidth: {innerWidth}</div>
<div>innerHeight: {innerHeight}</div>
<div>outerWidth: {outerWidth}</div>
<div>outerHeight: {outerHeight}</div>
<div>online: {online}</div>
<div class="fixed">
    <input type="number" bind:value={scrollX} />
    <input type="number" bind:value={scrollY} />
</div>
<div class="for-scroll"></div>

<style>
    .fixed {
        position: fixed;
        top: 10px;
        right: 10px;
    }
    .for-scroll {
        width: 2000px;
        height: 2000px;
    }
</style>
