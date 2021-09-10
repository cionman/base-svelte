<script>
  import User from './32_Props/User.svelte'

  let users = [
    {
      name: 'Neo',
      age: 85,
      email: 'neo@abc.com'
    },
    {
      name: 'Lewis',
      age: 30,
      email: 'lewis@abc.com'
    },
    {
      name: 'Evan',
      age: 52
    }
  ]
</script>
<pre>
컴포넌트의 Props를 사용해 부모에서 자식 컴포넌트로 데이터를 전달할 수 있습니다.
기본적으로 단반향 연결입니다.
관련한 몇 가지 사용 패턴을 살펴보세요!
</pre>
<section>
    {#each users as user}
        <User
                name={user.name}
                age={user.age}
                email={user.email} />
    {/each}
</section>

<section>
    {#each users as {name, age, email}}
        <User {name} {age} {email} />
    {/each}
</section>

<section>
    {#each users as user}
        <User {...user} />
    {/each}
</section>

<style>
    section {
        border: 1px solid orange;
        margin-bottom: 10px;
        padding: 10px;
    }
</style>
