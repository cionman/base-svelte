<script>
  import { get } from 'svelte/store'
  import { count, double, user } from './52_스토어_값얻기/store.js'

  console.log(get(count))
  console.log(get(double))
  console.log(get(user))
</script>
<pre>
    구독하지 않고도 스토어의 값을 얻을 수 있습니다.
</pre>
