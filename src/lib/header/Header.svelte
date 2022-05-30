<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import { page } from '$app/stores'
  
  let navItems = ['Articles', 'Chats', 'Awards', 'About']
</script>

<div class="flex justify-between mt-10">
  <a class="header text-lg text-white" sveltekit:prefetch href="/">Johnathan Specter</a>
  
  <ul class="phone:hidden laptop:block">
    {#each navItems as navItem}
      <li class="inline mx-5 " class:active={$page.url.pathname === navItem}>
        <a class="hover:text-white" sveltekit:prefetch href={navItem}>{navItem}</a>
      </li>
    {/each}
  </ul>
  
  <Button btnStatus='hidden'>Get in touch</Button>
  <img class="phone:block laptop:hidden" src="../Hamburger Menu.svg" alt="">
</div>