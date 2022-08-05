<script>
  import ProjectList from '$lib/components/ProjectList.svelte'
  import CompanyList from '$lib/components/CompanyList.svelte'
  import Speech from '$lib/components/Speech.svelte'
  import CTA from '$lib/components/CallToAction.svelte'

  import { Parallax, ParallaxLayer } from 'svelte-parallax'
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div>
  <div class="laptop:w-7/12">
    <h1 class="mt-20">Helping companies build better, scalable software.</h1>
    <p class="mt-3 laptop:w-10/12">Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook, and more</p>
  </div>
  
  <CompanyList />
  <ProjectList />
  <Speech />
  <CTA />
</div>
  

  
  
  


