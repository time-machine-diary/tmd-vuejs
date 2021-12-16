<template>
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="55px"
    height="55px"
    viewBox="0 0 55 55"
    enable-background="new 0 0 55 55"
    xml:space="preserve"
  >
    <circle id="selected-mark" cx="27.5" cy="27.167" r="25.667" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'selected-mark-icon',
})
</script>

<style scoped>
svg {
  fill: var(--theme-primary-color);
  width: var(--header-icon-width);
}
</style>
