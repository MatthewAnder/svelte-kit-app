<script lang="ts">
  export let btnStatus = ''
</script>

<button class="header bg-yellow-300 text-black py-2.5 px-5 phone:{btnStatus} laptop:block">
  <slot />
</button>
