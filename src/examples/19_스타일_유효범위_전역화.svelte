<pre>
    Svelte 컴포넌트에서 작성하는 스타일을 더 쉽고 안전하게 관리할 수 있는 편리한 방법을 제공합니다.
    {'<style>'}에 선언된 CSS는 기본적으로 해당 컴포넌트의 유효범위(Scoped)를 가집니다.
                                             요소의 class속성에 Svelte-Hash가 추가됩니다.


</pre>
<pre>
    {'<style>\n' +
    '  ul.container li.item {\n' +
    '    width: 100px;\n' +
    '  }\n' +
    '</style>'}
</pre>

<p>
    만약 유효범위 없이 선언하려면 :global(선택자) 수정자(Modifier)를 사용할 수 있습니다.
</p>
<pre>
    {'<style>\n' +
    '  :global(ul.container li.item) {\n' +
    '    width: 100px;\n' +
    '  }\n' +
    '</style>'}
</pre>
<h3>@keyframes 전역화</h3>
<pre>
    {'<div class="box"></div>\n' +
    '\n' +
    '<style>\n' +
    '  :global(body) {\n' +
    '    padding: 50px;  \n' +
    '  }\n' +
    '  .box {\n' +
    '    width: 100px;Class & Style Binding: Pattern\n' +
    '    height: 100px;\n' +
    '    background: tomato;\n' +
    '    animation: zoom .4s infinite alternate;\n' +
    '  }\n' +
    '  /* -global- */\n' +
    '  @keyframes -global-zoom {\n' +
    '    0% {\n' +
    '      transform: scale(1);\n' +
    '    }\n' +
    '    100% {\n' +
    '      transform: scale(1.5);\n' +
    '    }\n' +
    '  }\n' +
    '</style>'}
</pre>
