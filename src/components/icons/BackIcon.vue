<template>
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="38.295px"
    height="30.752px"
    viewBox="0 0 38.295 30.752"
    enable-background="new 0 0 38.295 30.752"
    xml:space="preserve"
  >
    <path
      fill="current"
      d="M38.295,13.626H5.975L17.126,2.475L14.651,0L0.513,14.139c-0.684,0.683-0.684,1.792,0,2.475l14.138,14.139
	l2.475-2.475L5.975,17.126h32.32V13.626z"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'back-icon',
})
</script>

<style scoped>
svg {
  fill: var(--icon-color);
  width: var(--header-icon-width);
}
</style>
