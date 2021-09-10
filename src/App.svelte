<script>
	import Router from 'svelte-spa-router'
	import routes from './routes'
	import Header from './examples/components/Header.svelte'
</script>

<Header />
<Router {routes} />
