<script>
  let fruits = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Cherry' },
    { id: '4', name: 'Apple' }
  ]

  function deleteFirst() {
    fruits = fruits.slice(1) // ['Banana', 'Cherry', 'Orange']
  }
</script>
<pre>
Each 반복 블록은 배열 데이터를 기반으로 렌더링합니다.
기본 형태는 다음과 같습니다.
</pre>
<pre>
Svelte는 할당을 통해 반응성을 갱신하므로 반복 데이터 자체가 갱신되면 목록 전체가 다시 렌더링 됩니다.
이떄 Svelte가 변경되지 않은 데이터의 항목을 다시 렌더링하지 않도록 식별 가능한 고유 Key를 제공하는 것이 중요합니다.
Key는 고유해야 합니다!

많은 경우 반복 데이터 각 항목의 id 속성을 사용합니다.

사용할 데이터 구조가 Key로 사용할 고유한 값을 가지도록 설계하는 것이 좋습니다.
다음 예제의 출력 이름에 Apple이 중복되고 있지만,
id 속성으로 식별 가능한 고유 Key를 제공했기 때문에 문제없이 동작합니다.
</pre>
<button on:click={deleteFirst}>
    Delete first fruit!
</button>

<ul>
    {#each fruits as fruit (fruit.id)}
        <li>{fruit.name}</li>
    {/each}
</ul>
