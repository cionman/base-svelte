<script>
  import UserCard from './46_$$slots/UserCard.svelte'
</script>
<pre>
    {'Svelte는 컴포넌트가 전달받은 내용(Content)의 정보를 가진 객체($$slots)를 제공합니다.\n' +
    '슬롯으로 받을 내용이 존재하는지를 확인하는 데 유용합니다!'}
</pre>
<UserCard>
    <h2 slot="name">HEROPY</h2>
    <div slot="age">85</div>
    <div slot="email">thesecon@gmail.com</div>
</UserCard>

<UserCard>
    <h2 slot="name">Neo</h2>
    <div slot="email">neo@zillinks.com</div>
</UserCard>

<UserCard>
    <h2 slot="name">Evan</h2>
</UserCard>
