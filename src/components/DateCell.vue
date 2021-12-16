<template>
  <span
    class="date-cell cell"
    :class="{ selected: isSelected }"
    @click="onCellClickHandler"
  >
    <selected-mark-icon v-if="isSelected" />
    <span class="date-text">{{ date }}</span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import SelectedMarkIcon from './icons/SelectedMarkIcon.vue'

export default Vue.extend({
  components: { SelectedMarkIcon },
  name: 'date-cell',
  props: {
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    date: { type: Number, required: true },
  },
  computed: {
    currentYear(): number {
      return this.$store.state.currentYear
    },
    currentMonth(): number {
      return this.$store.state.currentMonth
    },
    currentDate(): number {
      return this.$store.state.currentDate
    },
    isSelected(): boolean {
      const cellDate: string = [this.year, this.month, this.date].join()
      const currentDateStr: string = [
        this.currentYear,
        this.currentMonth,
        this.currentDate,
      ].join()
      return cellDate === currentDateStr
    },
  },
  methods: {
    onCellClickHandler(): void {
      this.$store.commit('setCurrentDate', {
        currentYear: this.year,
        currentMonth: this.month,
        currentDate: this.date,
      })
    },
  },
})
</script>

<style scoped>
.date-cell {
  z-index: 2;
  margin: auto;
  position: relative;
}
.date-cell.selected {
  color: var(--theme-white);
}

.date-cell > svg {
  width: calc(100vw / 7 - 20px);
}
.date-cell > svg,
.date-cell > .date-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
