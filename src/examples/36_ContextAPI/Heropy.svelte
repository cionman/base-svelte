<script>
  import { getContext, setContext } from 'svelte'
  import Anderson from './Anderson.svelte'

  setContext('heropy', 10000)
  const pocketMoney = getContext('heropy') // 10000
</script>

<h1 style="color: red">
    Heropy({pocketMoney})
</h1>
<ul>
    <li>
        <Anderson />
    </li>
</ul>
