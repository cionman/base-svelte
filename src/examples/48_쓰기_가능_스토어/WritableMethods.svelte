<script>
  import { onDestroy } from 'svelte'
  import { get } from 'svelte/store'
  import { name, count } from './store.js'

  let number
  let userName

  // Store 객체
  // 사용 가능 메소드: set, update, subscribe
  console.log(name, count)

  // 구독하지 않고 Store 객체의 값만 얻기
  console.log(get(name), get(count))

  // count 구독자 추가!
  const unsubscribeCount = count.subscribe(c => {
    number = c
  })
  // count 구독자 추가!
  const unsubscribeCount2 = count.subscribe(() => {})
  // name 구독자 추가!
  const unsubscribeName = name.subscribe(n => {
    userName = n
  })

  function increase() {
    count.update(c => c + 1)
    try {
      unsubscribeCount() // Only once!
      unsubscribeCount2()
    } catch (e) {}
  }
  function changeName() {
    // name.update(() => 'Neo')
    name.set('Neo')
  }

  onDestroy(() => {
    unsubscribeCount()
    unsubscribeCount2()
    unsubscribeName()
  })
</script>

<button
        on:click={increase}
        on:click={changeName}>
    Click me!
</button>

<h2>{number}</h2>
<h2>{userName}</h2>
