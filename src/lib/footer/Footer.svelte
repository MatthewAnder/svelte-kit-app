<script lang="ts">

let medias = [
  {source: '../Social Icons/Twitter.svg' },
  {source: '../Social Icons/LinkedIn.svg' },
  {source: '../Social Icons/Github.svg' },
]

</script>
<div class="py-4 bg-[#2e3038] laptop:-mx-44 tablet:-mx-32 phone:-mx-10">
  <div class="flex flex-row justify-between laptop:mx-44 tablet:mx-32 phone:mx-10">
    <div class="header text-lg text-white">Johnathan Specter</div>
    <div class="flex flex-row">
      {#each medias as media}
        <img class="px-1.5" src={media.source} alt="">
      {/each}
    </div>
  </div>
</div>