<script>
  console.log($$slots)
</script>

<div class="user-card">
    <slot name="name"></slot>
    {#if $$slots.age}
        <hr />
        <slot name="age"></slot>
    {/if}
    {#if $$slots.email}
        <hr />
        <slot name="email"></slot>
    {/if}
</div>

<style>
    .user-card {
        width: 300px;
        margin: 20px 10px;
        padding: 0 10px 20px;
        border: 4px solid lightgray;
        border-radius: 10px;
        box-shadow: 8px 8px rgba(0,0,0,.03);
        position: relative;
    }
</style>
