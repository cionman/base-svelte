<pre>
    {'svelte-preprocess는 다음과 같은 전/후 처리기들을 지원합니다.\n' +
    'Svelte Preprocess Documentation\n' +
    '\n' +
    'Babel\n' +
    'TypeScript\n' +
    'CoffeeScript\n' +
    'Pug\n' +
    'PostCSS / SugarSS\n' +
    'Sass(SCSS)\n' +
    'Less\n' +
    'Stylus\n' +
    'globalStyle\n' +
    'replace\n' +
    '자동 전처리 모드(Auto Preprocessing mode)\n' +
    'svelte-preprocess는 요소의 src, lang, type 속성을 기반으로 각각의 전처리기를 자동으로 사용합니다.\n' +
    '\n' +
    '<template lang="pug"></template>\n' +
    '\n' +
    '<script lang="ts"></script>\n' +
    '<script lang="coffee"></script>\n' +
    '\n' +
    '<style type="text/less"></style>\n' +
    '<style lang="scss"></style>\n' +
    '<style src="./my-style.styl"></style>\n' +
    '구성\n' +
    'Rollup\n' +
    '$ npm i -D rollup-plugin-svelte svelte-preprocess\n' +
    'rollup.config.js\n' +
    'import svelte from \'rollup-plugin-svelte\';\n' +
    'import sveltePreprocess from \'svelte-preprocess\';\n' +
    '\n' +
    'export default {\n' +
    '  plugins: [\n' +
    '    svelte({\n' +
    '      preprocess: sveltePreprocess({\n' +
    '        // 옵션..\n' +
    '      })\n' +
    '    })\n' +
    '  ]\n' +
    '};\n' +
    'Snowpack\n' +
    '@snowpack/plugin-svelte를 설치하면 svelte-preprocess이 같이 설치됩니다.\n' +
    '\n' +
    '$ npm i -D @snowpack/plugin-svelte\n' +
    'snowpack.config.js\n' +
    'import sveltePreprocess from \'svelte-preprocess\';\n' +
    '\n' +
    'module.exports = {\n' +
    '  plugins: [\n' +
    '    [\'@snowpack/plugin-svelte\', {\n' +
    '      preprocess: sveltePreprocess({\n' +
    '        // 옵션..\n' +
    '      })\n' +
    '    }]\n' +
    '  ]\n' +
    '};\n' +
    '경로 별칭\n' +
    '<script>\n' +
    '  // 상대 경로인 경우..\n' +
    '  import MyComponent from \'../../../components/MyComponent\'\n' +
    '</script>\n' +
    '이하 각 빌드 구성을 마치면,\n' +
    '경로에서 다음과 같이 ~ 혹은 @를 별칭으로 사용할 수 있습니다.\n' +
    '\n' +
    '<script>\n' +
    '  import MyComponent from \'~/components/MyComponent\';\n' +
    '</script>\n' +
    'Rollup\n' +
    '다음과 같이 @rollup/plugin-alias를 설치하고 rollup.config.js를 설정합니다.\n' +
    '\n' +
    '$ npm i -D @rollup/plugin-alias\n' +
    'rollup.config.js\n' +
    'import path from \'path\';\n' +
    'import alias from \'@rollup/plugin-alias\';\n' +
    '\n' +
    'export default {\n' +
    '  plugins: [\n' +
    '    alias({\n' +
    '      entries: [\n' +
    '        { find: \'~\', replacement: path.resolve(__dirname, \'src/\') },\n' +
    '        { find: \'@\', replacement: path.resolve(__dirname, \'src/\') }\n' +
    '      ]\n' +
    '    })\n' +
    '  ]\n' +
    '};\n' +
    'Snowpack\n' +
    'Snowpack에는 경로 별칭 기능이 내장되어 있습니다.\n' +
    '다음과 같이 구성합니다.\n' +
    '\n' +
    'snowpack.config.js\n' +
    'module.exports = {\n' +
    '  alias: {\n' +
    '    \'~\': \'./src\',\n' +
    '    \'@\': \'./src\'\n' +
    '  }\n' +
    '};'}
</pre>
