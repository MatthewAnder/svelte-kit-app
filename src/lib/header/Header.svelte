<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import { page } from '$app/stores'
  
  let navItems = [
    { name: 'Articles', link: '/articles'},
    { name: 'Chats', link: '/chats'},
    { name: 'Awards', link: '/awards'},
    { name: 'About', link: '/about'},
  ]

</script>

<div class="flex justify-between mt-10">
  <a class="header text-lg text-white" sveltekit:prefetch href="/">Johnathan Specter</a>
  
  <ul class="phone:hidden laptop:block">
    {#each navItems as navItem}
      <li class="inline mx-5 " class:active={$page.url.pathname === navItem.link}>
        <a class="hover:text-white" sveltekit:prefetch href={navItem.link}>{navItem.name}</a>
      </li>
    {/each}
  </ul>
  
  <Button btnStatus='hidden'>Get in touch</Button>
  <img class="phone:block laptop:hidden" src="../Hamburger Menu.svg" alt="">
</div>