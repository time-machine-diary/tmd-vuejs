<template>
  <p>v{{ version }}</p>
</template>

<script lang="ts">
import { version } from '../../package.json'
import Vue from 'vue'

export default Vue.extend({
  name: 'app-version-panel',
  data() {
    return { version }
  },
})
</script>

<style scoped>
p {
  color: var(--theme-white);
  text-align: center;
  font-size: var(--font-small-size);
}
</style>
