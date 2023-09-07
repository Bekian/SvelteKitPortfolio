<script>
    import { posts } from "./stores";
</script>
<!-- change the pfp to be per post -->
{#each posts as post}
    <div class="rounded box-border h-fit w-3/4 bg-stone-800 border-stone-700 p-5 m-5 mx-auto border-2 flex items-center">
        <img class="rounded-sm border-stone-700 h-1/4 w-1/4 mr-5" src="./smudgepfp.jpeg" alt="">
        <div class="flex flex-col">
            <h2 class="text-3xl text-headerText mb-4">{post.title}</h2>
            <p class="mb-4 w-5/6 text-base text-headerText">
                {post.description}
            </p>
            <div class="flex space-x-2">
                {#each post.tags as tag}
                <span class="px-2 py-1 text-sm bg-gray-300 rounded-full">{tag}</span>
                {/each}
            </div>
        </div>
    </div>
{/each}

