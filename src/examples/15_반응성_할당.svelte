<script>
  let name = 'Heropy'
  let fruits = ['Apple', 'Banana', 'Cherry']
  let user = {
    name: 'Heropy',
    age: 85,
    depth: {
      a: 'b'
    },
    numbers: [1, 2]
  }
  let numbers = user.numbers
  let hello = 'world'

  function assign() {
    name = 'Neo'

    fruits.push('Orange') // ['Apple', 'Banana', 'Cherry', 'Orange']
    fruits = fruits

    user.name = 'Neo' // $$invalidate(2, user.name = "Neo", user);
    user.depth.a = 'c' // $$invalidate(2, user.depth.a = "c", user);
    user.numbers.push(3)

    numbers = numbers
  }
</script>
<pre>
    Svelte에서 반응성 갱신하려면 할당 연산자(=)를 사용해야 합니다!
    .push나 .splice 같은 메소드 사용은 반응성을 갱신할 수 없습니다.

다음 예제에서 user.numbers.push(3)은 반응성이 갱신됩니다.
그러나 assign 함수에서 user.name = 'Neo'과 user.depth.a = 'c'를 제거하면 반응성은 갱신되지 않습니다.
이는 user.name = 'Neo'과 user.depth.a = 'c'가 동작하면서 각자 user 객체를 재할당하기 때문입니다.

주석 처리된 $$invalidate 함수 실행을 확인하세요!
실제 $$invalidate 함수는 컴파일 결과에서 확인할 수 있습니다.
</pre>
<button on:click={assign}>Assign!</button>

<h1>name: {name}</h1>
<h2>fruits: {fruits}</h2>
<h2>user name: {user.name} / {user.age}</h2>
<h2>user depth: {user.depth.a}</h2>
<h2>user numbers: {user.numbers}</h2>
<h2>numbers: {numbers}</h2>
<h2>{hello}</h2>
