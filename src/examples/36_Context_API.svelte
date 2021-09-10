<script>
  import { getContext } from 'svelte'
  import Heropy from './36_ContextAPI/Heropy.svelte'
  import Lewis from './36_ContextAPI/Lewis.svelte'
  import Evan from './36_ContextAPI/Evan.svelte'

  const pocketMoney = getContext('heropy') // undefined
</script>

<h1>App({pocketMoney})</h1>
<div>
    <Heropy />
    <Lewis />
    <Evan />
</div>

<style>
    h1 {
        font-size: 50px;
    }
    div {
        padding-left: 50px;
    }
</style>
