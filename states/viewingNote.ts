import { Dispatch, SetStateAction, useState } from 'react'
import { Note } from '../model/note'

export let viewingNote: Note
export let setViewingNote: Dispatch<SetStateAction<Note>>

export function useViewingNote() {
  ;[viewingNote, setViewingNote] = useState(null as Note)
}
