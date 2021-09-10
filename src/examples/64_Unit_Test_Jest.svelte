<pre>
    {'Jest를 사용해 Test 환경을 구성합니다.\n' +
    '\n' +
    'Jest 24버전부터 Babel 6버전의 지원이 중단되었습니다. Jest 23버전의 설치와는 방법이 조금 다릅니다.\n' +
    '\n' +
    '$ npm i -D jest @babel/core @babel/preset-env babel-core@7.0.0-bridge.0 babel-jest @testing-library/svelte jest-transform-svelte\n' +
    'babel-jest: Jest를 위한 Babel을 구성.\n' +
    'babel-core@7.0.0-bridge.0: babel-jest를 @babel/*패키지에서 정상적으로 동작시키기 위해 사용.\n' +
    'jest-transform-svelte: Jest를 사용해 Svelte 컴포넌트를 정상적으로 동작시키기 위해 사용.\n' +
    'Jest의 설정을 위해 jest.config.js을 생성합니다.\n' +
    '혹은 package.json에 "jest"블록을 선언할 수도 있습니다.\n' +
    '\n' +
    'jest.config.js\n' +
    'const sveltePreprocess = require(\'svelte-preprocess\'); // If you use Svelte preprocess like SCSS or Autoprefixer\n' +
    '\n' +
    'module.exports = {\n' +
    '  transform: {\n' +
    '    \'^.+\\\\.js$\': \'babel-jest\',\n' +
    '    \'^.+\\\\.svelte$\': [\n' +
    '      \'jest-transform-svelte\',\n' +
    '      {\n' +
    '        preprocess: sveltePreprocess(),\n' +
    '        debug: false,\n' +
    '        noStyles: true,\n' +
    '        compilerOptions: {}\n' +
    '      }\n' +
    '    ]\n' +
    '  },\n' +
    '  moduleFileExtensions: [\'js\', \'svelte\'],\n' +
    '  moduleNameMapper: {\n' +
    '    \'~(.*)$\': \'<rootDir>/src/$1\', // If you use Import path alias `~`\n' +
    '  },\n' +
    '  coverageReporters: [\'html\'],\n' +
    '  bail: false,\n' +
    '  verbose: false\n' +
    '};\n' +
    '우리는 Babel 7버전을 설치했습니다.\n' +
    '\n' +
    'babel.config.js\n' +
    'module.exports = {\n' +
    '  \'env\': {\n' +
    '    \'test\': {\n' +
    '      \'presets\': [[\'@babel/preset-env\', { \'targets\': { \'node\': \'current\' } }]]\n' +
    '    }\n' +
    '  }\n' +
    '};\n' +
    '간단한 설정이 끝났습니다.\n' +
    '빠른 테스트 실행을 위해 Watch 모드로 스크립트를 등록합니다.\n' +
    '\n' +
    'package.json\n' +
    '{\n' +
    '  "_comment": "package.json",\n' +
    '  "scripts": {\n' +
    '    "test": "jest --watchAll"\n' +
    '  }\n' +
    '}\n' +
    '이제 다음과 같이 실행할 수 있습니다.\n' +
    '\n' +
    '$ npm test\n' +
    '$ npm t # Alias\n' +
    '정상적으로 동작하는지 테스트하기 위해,\n' +
    '__tests__ 디텍터리를 생성하고 테스트를 진행할 파일과 동일한 이름으로 App.test.js을 생성합니다.\n' +
    '\n' +
    '├─ /src\n' +
    '│   ├─ /__tests__\n' +
    '│   │   └─ App.test.js\n' +
    '│   └─ App.svelte\n' +
    '설정한 테스트 환경이 정상적으로 동작하는지 확인하기 위해 최소한의 코드만 작성합니다.\n' +
    '\n' +
    '__tests__/App.test.js\n' +
    'import App from \'../App.svelte\'\n' +
    'import { render, cleanup } from \'@testing-library/svelte\'\n' +
    '\n' +
    'beforeEach(cleanup) // Required!\n' +
    '\n' +
    'describe(\'App\', () => {\n' +
    '  test(\'정상적으로 동작해야 합니다\', () => {\n' +
    '    const { container } = render(App)\n' +
    '\n' +
    '    expect(container.nodeName).toBe(\'BODY\')\n' +
    '  })\n' +
    '})\n' +
    'Svelte test with Jest\n' +
    '\n' +
    '다음은 svelte-testing-library의 일부분으로 render의 반환 값을 확인할 수 있습니다.\n' +
    'getQueriesForElement는 DOM Testing library Queries에서 확인할 수 있습니다.\n' +
    '\n' +
    'import {getQueriesForElement, prettyDOM} from \'@testing-library/dom\'\n' +
    '\n' +
    'export const render = (Component, {target, ...options} = {}) => {\n' +
    '  // ...\n' +
    '  return {\n' +
    '    component,\n' +
    '    // eslint-disable-next-line no-console\n' +
    '    debug: (el = document.body) => console.log(prettyDOM(el)),\n' +
    '    container: document.body,\n' +
    '    ...getQueriesForElement(document.body),\n' +
    '  }\n' +
    '}\n' +
    'view rawindex.js hosted with ❤ by GitHub\n'}
</pre>
