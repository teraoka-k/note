import { useState, Dispatch, SetStateAction } from 'react'

enum AppMode {
  home,
  write,
  read,
}

let mode: AppMode
let setMode: Dispatch<SetStateAction<AppMode>>

export function useAppMode() {
  ;[mode, setMode] = useState(AppMode.home)
}

export function isHomeMode(): boolean {
  return mode == AppMode.home
}
export function isWriteMode(): boolean {
  return mode == AppMode.write
}
export function isReadMode(): boolean {
  return mode == AppMode.read
}
export function setHomeMode(): void {
  setMode(AppMode.home)
}
export function setWriteMode(): void {
  setMode(AppMode.write)
}
export function setReadMode(): void {
  setMode(AppMode.read)
}
