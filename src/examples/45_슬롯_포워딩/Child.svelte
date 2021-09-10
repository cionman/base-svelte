<script>
  let scoped = 'Scoped!!'
</script>

<slot
        name="scoped"
        scoped={scoped}></slot>
<slot name="named"></slot>
<slot></slot>
