<template>
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="35.5px"
    height="35.5px"
    viewBox="0 0 35.5 35.5"
    enable-background="new 0 0 35.5 35.5"
    xml:space="preserve"
  >
    <g>
      <path
        fill="current"
        d="M17.75,35.5C7.962,35.5,0,27.537,0,17.75C0,7.962,7.962,0,17.75,0C27.537,0,35.5,7.962,35.5,17.75
		C35.5,27.537,27.537,35.5,17.75,35.5z M17.75,3.5C9.893,3.5,3.5,9.893,3.5,17.75S9.893,32,17.75,32S32,25.607,32,17.75
		S25.607,3.5,17.75,3.5z"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'menu-icon',
})
</script>

<style scoped>
svg {
  fill: var(--icon-color);
  width: var(--header-icon-width);
}
</style>
