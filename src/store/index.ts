import Vuex, { Store } from 'vuex'

import { getters, mutations, state } from './modules'
import { DateState } from './modules/date'

export type AppState = DateState

const store = (): Store<AppState> => {
  return new Vuex.Store<AppState>({
    state,
    getters,
    mutations,
  })
}

export default store
