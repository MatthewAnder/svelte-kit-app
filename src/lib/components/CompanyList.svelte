<script lang="ts">
  let images = [
    { source: '../Logos/Walmart.svg', delay: 500 },
    { source: '../Logos/JP Morgan.svg', delay: 600 },
    { source: '../Logos/Visa.svg', delay: 700 },
    { source: '../Logos/Tinder.svg', delay: 700 },
    { source: '../Logos/Samsung.svg', delay: 600 },
    { source: '../Logos/Verizon.svg', delay: 500 }
  ]
</script>

<div class="flex justify-between items-center mt-16 h-full laptop:flex-row phone:flex-wrap">
  {#each images as image}
    <div class="laptop:basis-auto tablet:basis-1/3 phone:basis-1/2 laptop:p-0 phone:p-3"><img class="text-center" src={image.source} alt="logos"></div>
  {/each}
</div>