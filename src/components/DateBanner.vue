<template>
  <p>{{ year }}년 {{ month }}월</p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'date-banner',
  computed: {
    year(): number {
      return this.$store.getters.year
    },
    month(): number {
      return this.$store.getters.month
    },
  },
})
</script>

<style scoped>
p {
  text-align: center;
  font-size: var(--header-font-size);
  color: var(--theme-white);
  font-weight: bold;
}
</style>
