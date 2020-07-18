import { useEffect, Key } from 'react'
import {
  isReadMode,
  setWriteMode,
  isWriteMode,
  isRewriteMode,
  setReadMode,
  setRewriteMode,
} from '../states/appMode'
import { deleteNote } from '../states/notes'
import { viewingNote, setViewingNote } from '../states/viewingNote'

export const useShortcutKeys = (): void => {
  useEffect(() => {
    shortcutKeys.forEach((shortcut) => {
      window.addEventListener(
        shortcut.event || 'keydown',
        (e: KeyboardEvent) => {
          if (
            e.key == shortcut.key &&
            ((shortcut.alt && e.altKey) || !shortcut.alt) &&
            ((shortcut.ctrl && e.ctrlKey) || !shortcut.ctrl) &&
            ((shortcut.meta && e.metaKey) || !shortcut.meta) &&
            ((shortcut.shift && e.shiftKey) || !shortcut.shift)
          )
            shortcut.action()
        }
      )
    })
  }, [])
}

const shortcutKeys: ShortcutKey[] = [
  {
    key: 'a',
    action: () => {
      if (isReadMode()) setWriteMode()
    },
  },
  {
    key: 'Escape',
    action: () => {
      if (isWriteMode() || isRewriteMode()) setReadMode()
    },
  },
  {
    key: 'd',
    action: () => {
      if (isReadMode() && viewingNote) {
        deleteNote(viewingNote)
        setViewingNote(null)
      }
    },
  },
  {
    key: 'm',
    action: () => {
      if (isReadMode() && viewingNote) setRewriteMode()
    },
  },
]

interface ShortcutKey {
  key: Key
  action: () => void
  event?: keyof WindowEventMap
  alt?: boolean
  ctrl?: boolean
  meta?: boolean
  shift?: boolean
}
