<script>
  import Address from './55_특별한요소_self/Address.svelte'

  let address = {
    label: '대한민국',
    children: [
      {
        label: '경기도',
        children: [
          { label: '수원',
            children:[
              {label:'장안동'}
            ],
          },
          { label: '성남' }
        ]
      },
      {
        label: '강원도',
        children: [
          { label: '강릉' },
          { label: '속초' }
        ]
      }
    ]
  }
</script>
<pre>
{'컴포넌트 자신을 재귀적으로 포함합니다.\n' +
'A 컴포넌트 내부에서 다시 A 컴포넌트를 사용하는 방법입니다.\n' +
'\n' +
'<svelte:self />\n' +
'다음의 재귀 함수와 같은 개념입니다.\n' +
'무한루프에 빠지지 않도록 재귀 호출이 멈출 수 있는 조건이 붙어야 합니다.\n' +
'\n' +
'function self() {\n' +
'  self()\n' +
'}\n' +
'self()\n' +
'다음 예제의 address 데이터를 활용할 때와 같이,\n' +
'같은 컴포넌트가 반복적으로 사용될 수 있는 구조에서 유용합니다.\n' +
'어떤 조건으로 재귀 호출이 멈추는지 확인해 보세요!'}
</pre>
<Address {address} />
