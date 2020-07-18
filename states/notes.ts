import { Dispatch, useState, useEffect, SetStateAction } from 'react'
import { Note } from '../logic/colllections/note'
import { executeAsync } from '../logic/async'

export let notes: Note[]
export let setNotes: Dispatch<SetStateAction<Note[]>>

export function useNotes() {
  ;[notes, setNotes] = useState([])
  useEffect(loadNotes, [])
}

async function findNotes(): Promise<Note[]> {
  return await (await fetch('api/note')).json()
}

function loadNotes(): void {
  executeAsync(async () => setNotes(await findNotes()))
}

export function deleteNote(note: Note): void {
  fetch(`api/note`, {
    method: 'DELETE',
    body: JSON.stringify(note._id),
  })
  loadNotes()
}

export function addNote(src: string): void {
  fetch('/api/note', {
    method: 'post',
    body: JSON.stringify({ text: src }),
  })
}

export function modifyNote(src: string, id: string): void {
  fetch('/api/note', {
    method: 'put',
    body: JSON.stringify({ text: src, id }),
  })
}
