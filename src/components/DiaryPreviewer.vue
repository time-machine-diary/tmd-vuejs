<template>
  <textarea readonly value="content" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'diary-previewer',
  props: {
    date: { type: Date },
    content: { type: String },
  },
})
</script>

<style scoped>
textarea {
  flex: 1;
  outline: none;
  border: none;
}
</style>
