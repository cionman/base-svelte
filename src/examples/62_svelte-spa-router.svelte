<pre>
    {'svelte-spa-router는 SPA(Single Page Application)을 위한 라우터 모듈입니다.\n' +
    'Svelte REPL에서도 사용할 수 있습니다.\n' +
    '\n' +
    'REPL에서 예제 보기 >\n' +
    '\n' +
    '$ npm i -D svelte-spa-router\n' +
    'routes.js를 생성해 다음과 같이 Route로 정의할 컴포넌트를 연결합니다.\n' +
    '이 컴포넌트들은 /routes 디렉터리에 생성합니다.\n' +
    '\n' +
    'src/routes.js\n' +
    'import Home from \'./routes/Home.svelte\'\n' +
    'import About from \'./routes/About.svelte\'\n' +
    'import Blog from \'./routes/Blog.svelte\'\n' +
    '\n' +
    'const routes = {\n' +
    '  \'/\': Home,\n' +
    '  \'/about\': About,\n' +
    '  \'/blog\': Blog\n' +
    '}\n' +
    '\n' +
    'export default routes\n' +
    '위 설정 파일을 App.svelte에서 가져와 다음과 같이 연결합니다.\n' +
    '각 경로로 이동할 수 있게 Header.svelte 컴포넌트도 같이 추가합니다.\n' +
    '\n' +
    'Svelte SPA Router default directory structure\n' +
    '\n' +
    'src/App.svelte\n' +
    '<script>\n' +
    '  import Router from \'svelte-spa-router\'\n' +
    '  import routes from \'./routes\'\n' +
    '  import Header from \'./components/Header.svelte\'\n' +
    '</script>\n' +
    '\n' +
    '<Header />\n' +
    '<Router {routes} />\n' +
    'src/components/Header.svelte\n' +
    '<script>\n' +
    '  import { link } from \'svelte-spa-router\'\n' +
    '  import active from \'svelte-spa-router/active\'\n' +
    '</script>\n' +
    '\n' +
    '<header>\n' +
    '  <a \n' +
    '    href="/"\n' +
    '    use:link\n' +
    '    use:active>\n' +
    '    Home\n' +
    '  </a>\n' +
    '  <a \n' +
    '    href="/about"\n' +
    '    use:link\n' +
    '    use:active>\n' +
    '    About\n' +
    '  </a>\n' +
    '  <a \n' +
    '    href="/blog"\n' +
    '    use:link\n' +
    '    use:active>\n' +
    '    Blog\n' +
    '  </a>\n' +
    '</header>\n' +
    '\n' +
    '<style>\n' +
    '  :global(header a.active) {\n' +
    '    font-weight: bold;\n' +
    '    text-decoration: underline;\n' +
    '  }\n' +
    '</style>'}
</pre>
