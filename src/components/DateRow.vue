<template>
  <div class="date-row">
    <span
      v-for="emptyCell in emptyCellCount"
      :key="`empty-${emptyCell}`"
      class="empty-cell"
    />

    <date-cell
      v-for="date in dates"
      :key="date"
      :year="year"
      :month="month"
      :date="date"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DateCell from './DateCell.vue'

export default Vue.extend({
  name: 'date-row',
  props: {
    emptyCellCount: { type: Number, default: 0 },
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    startDate: { type: Number, required: true },
    lastDate: { type: Number, required: true },
  },
  computed: {
    dates(): number[] {
      let dates: number[] = []

      for (
        let date: number = this.startDate;
        date < this.lastDate && date < this.startDate + 7 - this.emptyCellCount;
        date++
      ) {
        dates.push(date)
      }

      return dates
    },
  },
  components: { DateCell },
})
</script>

<style scoped>
.date-row {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid var(--theme-gray);
}
</style>
