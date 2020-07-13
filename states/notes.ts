import { Dispatch, useState, useEffect, SetStateAction } from 'react'
import { Note } from '../logic/colllections/note'
import { executeAsync } from '../logic/async'

export let notes: Note[]
export let setNotes: Dispatch<SetStateAction<Note[]>>

export function useNotes() {
  ;[notes, setNotes] = useState([])
  loadNotes()
}

async function findNotes(): Promise<Note[]> {
  return await (await fetch('api/note')).json()
}

export function loadNotes(): void {
  executeAsync(async () => setNotes(await findNotes()))
}
