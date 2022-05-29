<script>
  import ProjectList from '$lib/components/ProjectList.svelte'
  import CompanyList from '$lib/components/CompanyList.svelte'
  import Speech from '$lib/components/Speech.svelte'
  import CTA from '$lib/components/CallToAction.svelte'
  import { fly } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div>
  <div class="laptop:w-7/12">
    <h1 class="mt-20" in:fly="{{delay: 100, duration: 1000, y: 100, easing: quintOut, opacity: 0}}">Helping companies build better, scalable software.</h1>
    <p class="mt-3 laptop:w-10/12" in:fly="{{delay: 200, duration: 1000, y: 100, easing: quintOut, opacity: 0}}">Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook, and more</p>
  </div>

  <CompanyList />
  <ProjectList />
  <Speech />
  <CTA />
  
</div>


