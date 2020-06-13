export enum AppMode {
  home,
  write,
  read,
}

export let appMode = AppMode.home

/*
 * setters & getters
 */
export const isHomeMode = (): boolean => {
  return appMode == AppMode.home
}
export const setHomeMode = (): void => {
  appMode = AppMode.home
}

export const isWriteMode = (): boolean => {
  return appMode == AppMode.write
}
export const setWriteMode = (): void => {
  appMode = AppMode.write
}

export const isReadMode = (): boolean => {
  return appMode == AppMode.read
}
export const setReadMode = (): void => {
  appMode = AppMode.read
}
