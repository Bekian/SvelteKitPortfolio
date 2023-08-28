<script>
	const pages = ['home', 'projects', 'about', 'contact']
    import HomeBox from "$lib/+homeBox.svelte";
</script>



<h1 class="text-5xl text-center font-medium text-headerText">A portfolio!</h1>
<br />
<HomeBox /> 

<style lang="postcss">
:global(html) {
    background-color: theme(colors.stone.900);
    

    
}
</style>