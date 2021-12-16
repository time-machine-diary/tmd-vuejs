<template>
  <div class="container">
    <div class="days">
      <span class="days-cell cell" v-for="day in days" :key="day">{{
        day
      }}</span>
    </div>
    <div class="slide-container" ref="slideContainer" @scroll="scrollHandler">
      <!-- Prev calendar -->
      <Calendar :date="prevDate" />

      <!-- Current calendar -->
      <Calendar :date="date" />

      <!-- Next calendar -->
      <Calendar :date="nextDate" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Calendar from './Calendar.vue'
import { scrollDebounce } from '../utils/scroll-debounce'

export default Vue.extend({
  name: 'calendar-slider',
  data() {
    return {
      days: ['일', '월', '화', '수', '목', '금', '토'],
      timer: 0,
    }
  },
  computed: {
    date(): Date {
      return this.$store.state.date
    },
    prevDate(): Date {
      const date: Date = new Date(this.date)
      date.setMonth(date.getMonth() - 1)
      return date
    },
    nextDate(): Date {
      const date: Date = new Date(this.date)
      date.setMonth(date.getMonth() + 1)
      return date
    },
  },
  methods: {
    scrollHandler() {
      scrollDebounce(() => {
        if (!this.$refs.slideContainer)
          throw new Error('Slide container not found')

        const container: Element = this.$refs.slideContainer as Element
        if (container.scrollLeft === 0) {
          this.$store.commit('goPrevMonth')
        } else if (
          container.scrollWidth - container.clientWidth <=
          container.scrollLeft
        ) {
          this.$store.commit('goNextMonth')
        }
      })
    },
    centralizeContainer() {
      if (this.$refs.slideContainer) {
        const container: Element = this.$refs.slideContainer as Element
        container.scrollTo(container.clientWidth, 0)
      }
    },
  },
  mounted() {
    this.centralizeContainer()
  },
  updated() {
    this.centralizeContainer()
  },
  components: { Calendar },
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.slide-container {
  flex: 1;

  max-width: 100vw;
  overflow: auto;

  display: flex;
  scroll-snap-type: x mandatory;
}
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  min-width: 100vw;
}
.cell {
  margin: auto;
  padding: 10px;
}
.days-cell {
  color: var(--theme-primary-color);
  font-weight: bold;
}
</style>
