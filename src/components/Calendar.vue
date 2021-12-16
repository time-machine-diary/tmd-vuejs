<template>
  <div class="calendar">
    <date-row
      v-for="week in 6"
      :key="week"
      :year="year"
      :month="month"
      :emptyCellCount="week === 1 ? emptyCellCount : 0"
      :startDate="week === 1 ? 1 : (week - 1) * 7 - emptyCellCount + 1"
      :lastDate="lastDate"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DateRow from './DateRow.vue'
export default Vue.extend<unknown, unknown, unknown, { date: Date }>({
  props: {
    date: { type: Date, required: true },
  },
  computed: {
    year(): number {
      return this.date.getFullYear()
    },
    month(): number {
      return this.date.getMonth() + 1
    },
    emptyCellCount(): number {
      const newDate: Date = new Date(this.date)
      newDate.setDate(1)
      return newDate.getDay()
    },
    lastDate(): number {
      const newDate: Date = new Date(this.date)
      newDate.setMonth(newDate.getMonth() + 1, 0)

      return newDate.getDate()
    },
  },
  components: { DateRow },
})
</script>

<style scoped>
.calendar {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 100vw;

  scroll-snap-align: center;
  scroll-snap-stop: always;
}
.cell {
  margin: auto;
  border-bottom: 1px solid var(--theme-gray);
  width: calc(100vw / 7);
  padding-bottom: 10px;
  text-align: center;
}
.days-cell {
  color: var(--theme-primary-color);
  font-weight: bold;
}
</style>
