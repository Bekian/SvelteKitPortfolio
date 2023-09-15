<script>
    import { posts } from "./stores";
</script>

{#each posts as post}
    <div class="rounded box-border h-fit w-3/4 bg-neutral-700 border-stone-500 p-5 m-5 mx-auto border-2 flex items-center flex-col sm:flex-row">
        <img class="rounded-sm border-stone-700 h-1/4 w-1/4 mb-5 sm:mr-5 sm:mb-0" src={post.src} alt="">
        <div class="flex flex-col">
            <h2 class="text-3xl text-headerText 2xl:text-4xl mb-4">{post.title}</h2>
            <p class="mb-4 w-5/6 2xl:text-2xl text-base text-headerText">
                {post.description}
            </p>
            <div class="flex flex-wrap gap-x-2">
                {#each post.tags as tag}
                <span class="block px-2 py-1 text-center align-middle min-w-fit min-h-fit text-sm bg-gray-300 rounded-full mb-2">{tag}</span>
                {/each}
            </div>
        </div>
    </div>
{/each}

