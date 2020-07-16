import { useState, Dispatch, SetStateAction } from 'react'
import { read } from 'fs'

enum AppMode {
  write,
  read,
  rewrite,
}

let mode: AppMode
let setMode: Dispatch<SetStateAction<AppMode>>

export function useAppMode() {
  ;[mode, setMode] = useState(AppMode.read)
}

export function isWriteMode(): boolean {
  return mode == AppMode.write
}
export function isReadMode(): boolean {
  return mode == AppMode.read
}
export function isRewriteMode(): boolean {
  return mode == AppMode.rewrite
}
export function setWriteMode(): void {
  cahngeMode(AppMode.write)
}
export function setReadMode(): void {
  cahngeMode(AppMode.read)
}
export function setRewriteMode(): void {
  cahngeMode(AppMode.rewrite)
}

/**
 * @private
 */
function cahngeMode(newMode: AppMode): void {
  histories.push(mode)
  setMode(newMode)
}

export function backMode(): void {
  setMode(histories.pop())
}

let histories: AppMode[] = []
