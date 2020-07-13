import { Note } from '../logic/colllections/note'
import { Dispatch, SetStateAction, useState } from 'react'

export let viewingNote: Note
export let setViewingNote: Dispatch<SetStateAction<Note>>

export function useViewingNote() {
  ;[viewingNote, setViewingNote] = useState(null as Note)
}
