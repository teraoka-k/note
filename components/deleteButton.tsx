import { setViewingNote, viewingNote } from '../states/viewingNote'
import { playLowTone } from '../states/soundLibrary'
import { deleteNote } from '../states/notes'

export const DeleteButton = () => {
  return (
    <button
      onClick={() => {
        playLowTone()
        deleteNote(viewingNote)
        setViewingNote(null)
      }}
    >
      Delete
    </button>
  )
}
