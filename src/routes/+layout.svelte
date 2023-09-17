<script>
    import "../app.css";
    import { page } from '$app/stores';
    import { navPages } from "$lib/stores";
    import { toggleDropdown } from "$lib/utils"

    // Extract the pathname from the $page store
    let currentPage = $page.url.pathname;
    $: {
      currentPage = $page.url.pathname;
    }

    let isProfileDropdownVisible = false;
    let isMobileMenuVisible = false;
    
</script>


<nav class="bg-neutral-900 border-b border-sky-600">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <!-- Left Side Navbar-->
      <!-- Mobile menu button-->
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" on:click={() => isMobileMenuVisible = !isMobileMenuVisible} class="relative inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <!-- svg container -->
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            {#if isMobileMenuVisible === false}
            <!-- Hamburger icon -->
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            {:else}
            <!-- X / Close icon -->
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            {/if}
          </svg>
        </button>
      </div>

      <!-- Large Logo and Nav buttons-->
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <!-- large screen logo -->
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="./logo.png" alt="Bekian's Logo">
        </div>

        <!-- large screen nav buttons -->
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            {#each navPages as page}
            <a href={`/${page.url}`} class="{currentPage === `/${page.url}` ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium " aria-current="page">{page.title}</a>
            {/each}
          </div>
        </div>
      </div>


      <!-- Righ Side Navbar -->
      <!-- Notification button and Profile dropdown -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <!-- Notifications TODO: Add notfications to support this -->
        <button type="button" class="relative rounded-full bg-neutral-800 p-1 text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800">
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">View notifications</span>
          <!-- Notification svg -->
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
        
        <!-- Profile dropdown -->
        <div class="relative ml-3">
          <div>
            <button
              type="button"
              class="relative flex rounded-full bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800"
              on:click={() => isProfileDropdownVisible = toggleDropdown(isProfileDropdownVisible)}
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="./smudgepfp.jpeg" alt="">
            </button>
          </div>
          {#if isProfileDropdownVisible === true } 
          <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" tabindex="-1" >
            <!-- Active: "bg-neutral-100", Not Active: "" -->
            <a href="/[user]" class="block px-4 py-2 text-sm text-neutral-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="/settings" class="block px-4 py-2 text-sm text-neutral-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="/" class="block px-4 py-2 text-sm text-neutral-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>
          {/if}
        </div>
        
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  {#if isMobileMenuVisible === true}
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      {#each navPages as page}
        <a href={`/${page.url}`} class="{currentPage === `/${page.url}` ? 'bg-stone-800 text-white' : 'text-neutral-300 hover:bg-neutral-700 hover:text-white'} block w-full rounded-md px-3 py-2 text-sm font-medium " aria-current="page">{page.title}</a>
      {/each}
    </div>
  </div>
  {/if}
</nav>


<slot />