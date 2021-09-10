<script>
  import Card from './42_이름을_가지는_슬롯/Card.svelte'
</script>
<pre>
    {'다음과 같이 내용에 슬롯 이름을 지정해 원하는 슬롯에 삽입할 수 있습니다.\n' +
    '\n' +
    '<div slot="슬롯_이름"></div>\n' +
    '슬롯에 지정된 이름으로 해당 내용이 삽입됩니다.\n' +
    '\n' +
    '<slot name="슬롯_이름"></slot>'}
</pre>
<Card>
    <div slot="age">85</div>
    <h2 slot="name">Heropy</h2>
    <div slot="email">thesecon@gmail.com</div>
</Card>

<Card>
    <span slot="email">neo@abc.com</span>
    <h3 slot="name">Neo</h3>
</Card>

<style>
    h2 {
        font-weight: 400;
    }
    h3 {
        color: red;
    }
</style>
