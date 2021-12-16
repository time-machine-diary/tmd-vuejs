let timer = 0

export const scrollDebounce = (callback: () => void, delay = 100): void => {
  if (timer) clearTimeout(timer)

  timer = setTimeout(callback, delay)
}
