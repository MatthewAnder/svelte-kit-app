<script>
  import Header from '$lib/header/Header.svelte'
  import Footer from '$lib/footer/Footer.svelte'
  import '../app.css'
  import { onMount } from 'svelte';

  let ready = false;
  onMount(() => ready = true);
</script>

<main>
  {#if ready}
    <Header />

    <slot />

    <Footer />
  {/if}
</main>