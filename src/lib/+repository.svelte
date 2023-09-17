<script>
    import { onMount } from 'svelte';
    import { getRepos } from '$lib/githubAPI.js';
    let repos = [];
    onMount(async () => {
    repos = await getRepos('Bekian');
    });
    </script>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
    {#await repos then value}
    {#each value as repo}
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <div>
    <div class="text-xl font-medium text-black">{repo.name}</div>
    <p class="text-gray-500">{repo.description}</p>
    <p class="text-gray-500">{repo.language}</p>
    <p class="text-gray-500">{repo.commits}</p>
    <p class="text-gray-500">{repo.tags}</p>
    </div>
    </div>
    {/each}
    {:catch error}
    <p>{error.message}</p>
    {/await}
    </div>