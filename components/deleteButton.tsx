import { setViewingNote, viewingNote } from '../states/viewingNote'
import { playLowTone } from '../states/soundLibrary'

export const DeleteButton = () => {
  return (
    <button
      onClick={() => {
        playLowTone()
        fetch(`api/note`, {
          method: 'DELETE',
          body: JSON.stringify(viewingNote._id),
        })
        setViewingNote(null)
      }}
    >
      Delete
    </button>
  )
}
