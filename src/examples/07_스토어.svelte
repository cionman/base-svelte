<script>
  import { storeName } from './07_스토어/store.js'
  import Parent from './07_스토어/Parent.svelte'

  let name = 'world'
  // let $hello = '' // Error!
  $storeName = name
  console.log('storeName :', storeName) // 스토어 객체
  console.log('$storeName :', $storeName) // 스토어 값(데이터)
</script>
<ul>
    <li>스토어: 쓰기 가능 스토어(writable) & 수동 구독과 자동 구독</li>
</ul>

<h1>Hello {name}!</h1>
<Parent />
