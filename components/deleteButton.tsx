import { setViewingNote, viewingNote } from '../states/viewingNote'
import { deleteNote } from '../states/notes'

export const DeleteButton = () => {
  return (
    <button
      onClick={() => {
        deleteNote(viewingNote)
        setViewingNote(null)
      }}
    >
      Delete
    </button>
  )
}
