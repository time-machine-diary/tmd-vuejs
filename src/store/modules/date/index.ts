import { getters as dateGetters } from './getters'
import { mutations as dateMutations } from './mutations'

export type DateState = {
  date: Date
  currentYear: number
  currentMonth: number
  currentDate: number
}

const date: Date = new Date()

export const state: DateState = {
  date,
  currentYear: date.getFullYear(),
  currentMonth: date.getMonth() + 1,
  currentDate: date.getDate(),
}
export const getters = dateGetters
export const mutations = dateMutations
