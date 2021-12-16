<template>
  <div class="container">
    <calendar-slider />

    <diary-previewer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CalendarSlider from '../components/CalendarSlider.vue'
import DiaryPreviewer from '../components/DiaryPreviewer.vue'

export default Vue.extend({
  name: 'calendar-view',
  computed: {},
  components: { CalendarSlider, DiaryPreviewer },
})
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--theme-white);
}
</style>
