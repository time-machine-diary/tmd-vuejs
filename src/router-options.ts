import { RouterOptions } from 'vue-router'

import { LOCAL_STORAGE_KEYS, VIEW_MODES } from './constants'
import CalendarView from './views/CalendarView.vue'
import ListView from './views/ListView.vue'
import SettingView from './views/SettingView.vue'

const routerOptions: RouterOptions = {
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: (() => {
        const viewMode: string | null = localStorage.getItem(
          LOCAL_STORAGE_KEYS.SETTING_VIEW_MODE
        )
        if (!viewMode) return CalendarView

        return viewMode === VIEW_MODES.CALENDAR ? CalendarView : ListView
      })(),
    },
    {
      name: 'Setting',
      path: '/settings',
      component: SettingView,
    },
  ],
}

export default routerOptions
