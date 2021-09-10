<script>
  import Heropy from './56_특별한요소_component/Heropy.svelte'
  import Neo from './56_특별한요소_component/Neo.svelte'
  import Anderson from './56_특별한요소_component/Anderson.svelte'

  let components = [
    { name: 'Heropy', comp: Heropy },
    { name: 'Neo', comp: Neo },
    { name: 'Anderson', comp: Anderson }
  ]
  let index = 2
  let selected = components[index - 1].comp
</script>
<pre>
컴포넌트를 동적으로 렌더링할 때 사용합니다.
this 속성에 컴포넌트 객체를 연결해야 합니다.
</pre>
{#each components as {name, comp}, i (name)}
    <label>
        <input
                type="radio"
                value={comp}
                bind:group={selected}
                on:change={() => index = i + 1} />
        {name}
    </label>
{/each}

<svelte:component
        this={selected}
        {index} />

<!-- <div>{selected}</div> -->
