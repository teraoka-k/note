import { playEnterSound } from '../util/sounds'
import { setViewingNote, viewingNote } from '../states/viewingNote'

export const DeleteButton = () => {
  return (
    <button
      onClick={() => {
        playEnterSound()
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
