import {
  getters as dateGetters,
  mutations as dateMutations,
  state as dateState,
} from './date'
import { state as settingState } from './setting'

const state = { ...dateState, ...settingState }
const getters = { ...dateGetters }
const mutations = { ...dateMutations }

export { getters, mutations, state }
