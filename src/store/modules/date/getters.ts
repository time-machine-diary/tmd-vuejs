import { AppState } from '../../'

export const getters = {
  year({ date }: AppState): number {
    return date.getFullYear()
  },

  month({ date }: AppState): number {
    return date.getMonth() + 1
  },

  date({ date }: AppState): number {
    return date.getDate()
  },

  concatenatedCurrentDate({
    currentYear,
    currentMonth,
    currentDate,
  }: AppState): string {
    return [currentYear, currentMonth, currentDate].join()
  },
}
