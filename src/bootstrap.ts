import { LOCAL_STORAGE_KEYS, VIEW_MODES } from './constants'

const bootstrap = (): void => {
  // Initializing local storage
  initLocalStorage()
}

const initLocalStorage = (): void => {
  if (!localStorage.getItem(LOCAL_STORAGE_KEYS.SETTING_VIEW_MODE))
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.SETTING_VIEW_MODE,
      VIEW_MODES.CALENDAR
    )
}

export default bootstrap
