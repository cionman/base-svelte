<script>
  function clickHandler(event) {
    // console.log(event.target)
    console.log(event.currentTarget)
  }
  function wheelHandler(event) {
    console.log(event)
  }
</script>
<pre>
Svelte에서는 DOM 이벤트를 위한 여러 수식어를 제공합니다.
|(Vertical bar) 기호를 이용해 작성할 수 있으며, 체이닝이 가능합니다.

다음과 같은 수식어를 사용할 수 있습니다.

수식어	설명
preventDefault	기본 동작 방지
stopPropagation	이벤트 버블링 방지
passive	이벤트 처리를 완료하지 않고도 기본 속도로 화면을 스크롤
nonpassive	명시적인 passive: false(보통 필요하지 않음)
capture	캡쳐링에서 핸들러 실행
once	최초 실행 후 핸들러 삭제
self	이벤트의 target과 currentTarget이 일치하는 경우 핸들러 실행



</pre>
<section>
    <!-- 기본 동작 방지 -->
    <!-- el.addEventListener('click', e => e.preventDefault()) -->
    <h2>preventDefault</h2>
    <a
            href="https://naver.com"
            target="_blank"
            on:click|preventDefault={clickHandler}>
        Naver
    </a>
</section>

<section>
    <!-- 최초 실행 후 핸들러 삭제 -->
    <h2>Once</h2>
    <a
            href="https://naver.com"
            target="_blank"
            on:click|preventDefault|once={clickHandler}>
        Naver
    </a>
</section>

<section>
    <!-- 이벤트 버블링 방지 -->
    <!-- el.addEventListener('click', e => e.stopPropagation()) -->
    <h2>stopPropagation</h2>
    <div
            class="parent"
            on:click={clickHandler}>
        <div
                class="child"
                on:click|stopPropagation={clickHandler}></div>
    </div>
</section>

<section>
    <!-- 캡쳐링에서 핸들러 실행 -->
    <!-- el.addEventListener('click', e => {}, true) -->
    <!-- el.addEventListener('click', e => {}, {capture: true}) -->
    <h2>capture</h2>
    <div
            class="parent"
            on:click|capture={clickHandler}>
        <div
                class="child"
                on:click={clickHandler}></div>
    </div>
</section>

<section>
    <!-- event의 target과 currentTarget이 일치하는 경우 핸들러 실행 -->
    <h2>self</h2>
    <div
            class="parent"
            on:click|self={clickHandler}>
        <div class="child"></div>
    </div>
</section>

<section>
    <!-- 이벤트 처리를 완료하지 않고도 기본 속도로 화면을 스크롤 -->
    <!-- el.addEventListener('wheel', e => {}, {passive: true}) -->
    <h2>passive</h2>
    <div
            class="parent wheel"
            on:wheel|passive={wheelHandler}>
        <div class="child"></div>
    </div>
</section>

<style>
    section {
        border: 1px solid orange;
        padding: 10px;
        margin-bottom: 10px;
    }
    h2 {
        margin: 0;
        margin-bottom: 10px;
    }
    .parent {
        width: 160px;
        height: 120px;
        background: royalblue;
        padding: 20px;
    }
    .child {
        width: 100px;
        height: 100px;
        background: tomato;
    }
    .wheel.parent {
        overflow: auto;
    }
    .wheel .child {
        height: 1000px;
    }
</style>
