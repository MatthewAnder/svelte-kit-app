<script lang="ts">
  let projects = [
    {
      image: '.././Spense.png',
      name: 'Spense.com',
      content: 'Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they\'ll get paid. Project in collaboration with Codewell.cc'
    },
    {
      image: '.././YelpCamp.png',
      name: 'YelpCamp.com',
      content: 'Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd\'s favorite in 2021'
    },
  ]
</script>

<ul class="flex justify-between mt-12 laptop:flex-row phone:flex-col">
  {#each projects as project}
    <li class="laptop:w-5/12 laptop:py-0 phone:py-3">
      <img src={project.image} alt="project">
      <h3 class="my-3">{project.name} &rarr;</h3>
      <p>{project.content}</p>
    </li>
  {/each}
</ul>