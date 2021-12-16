// import { getters as dateGetters } from './getters'
// import { mutations as dateMutations } from './mutations'

import { LOCAL_STORAGE_KEYS, THEMES, VIEW_MODES } from '../../../constants'

// export type DateState = {
//   date: Date
//   currentYear: number
//   currentMonth: number
//   currentDate: number
// }

// const date: Date = new Date()

// export const state: DateState = {
//   date,
//   currentYear: date.getFullYear(),
//   currentMonth: date.getMonth() + 1,
//   currentDate: date.getDate(),
// }
// export const getters = dateGetters
// export const mutations = dateMutations

export type SettingState = {
  usePassword: boolean
  viewMode: string
  alarm?: string
  theme: string
}

export const state: SettingState = {
  usePassword:
    localStorage.getItem(LOCAL_STORAGE_KEYS.SETTING_USE_PASSWORD) === 'true'
      ? true
      : false,
  viewMode:
    localStorage.getItem(LOCAL_STORAGE_KEYS.SETTING_VIEW_MODE) ||
    VIEW_MODES.CALENDAR,
  alarm: localStorage.getItem(LOCAL_STORAGE_KEYS.SETTING_ALARM) || undefined,
  theme:
    localStorage.getItem(LOCAL_STORAGE_KEYS.SETTING_THEME) || THEMES.NORMAL,
}
