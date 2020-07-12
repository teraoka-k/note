import { playOpenSound } from '../util/sounds'
import { setReadMode } from '../logic/appMode'
import { Dispatch, SetStateAction } from 'react'
import { Note } from '../logic/colllections/note'

export const ReadButton = (props: {
  setNotes: Dispatch<SetStateAction<Note[]>>
}) => (
  <button
    onClick={() => {
      playOpenSound()
      async function fetchNotes() {
        const res = await fetch('api/notes')
        const data = await res.json()
        props.setNotes(data)
      }
      fetchNotes()
      setReadMode()
    }}
  >
    Read
  </button>
)
