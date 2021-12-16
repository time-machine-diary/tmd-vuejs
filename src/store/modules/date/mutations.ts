import { AppState } from '../../'

export const mutations = {
  goNextMonth(state: AppState): void {
    const date: Date = new Date(state.date)
    date.setMonth(date.getMonth() + 1)

    state.date = date
  },

  goPrevMonth(state: AppState): void {
    const date: Date = new Date(state.date)
    date.setMonth(date.getMonth() - 1)

    state.date = date
  },

  setCurrentDate(
    state: AppState,
    {
      currentYear,
      currentMonth,
      currentDate,
    }: { currentYear: number; currentMonth: number; currentDate: number }
  ): void {
    state.currentYear = currentYear
    state.currentMonth = currentMonth
    state.currentDate = currentDate
  },
}
