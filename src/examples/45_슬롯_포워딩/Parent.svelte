<script>
  import Child from './Child.svelte'
</script>

<Child let:scoped>
    <slot></slot>
    <slot
            name="named"
            slot="named"></slot>
    <slot
            name="scoped"
            slot="scoped"
            scoped={scoped}></slot>
</Child>
