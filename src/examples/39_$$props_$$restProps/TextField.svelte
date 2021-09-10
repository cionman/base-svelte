<script>
  export let value
  export let color

  console.log('$$restProps,', $$restProps)
  console.log('$$props,', $$props)
</script>

<div class="my-custom-input">
    <input
            bind:value
            style="color: {color};"
            {...$$restProps} />
    <!-- {...$$props} /> -->
</div>

<style>
    .my-custom-input input {
        border-radius: 100px;
        padding: 10px 20px;
    }
</style>
