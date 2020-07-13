import { BackButton } from './backButton'
import { center, horizontallyCenter } from '../styles/styles'
import { NoteViewer } from './noteViewer'
import { NotePreviewer } from './notePreviewer'
import { useViewingNote, viewingNote } from '../states/viewingNote'
import { WriteButton } from './writeButton'
import { DeleteButton } from './deleteButton'

export const Reader = () => {
  useViewingNote()

  return (
    <div>
      <NotePreviewer></NotePreviewer>
      {!viewingNote ? (
        <BackButton style={center}></BackButton>
      ) : (
        <div style={horizontallyCenter}>
          <WriteButton></WriteButton>
          <DeleteButton></DeleteButton>
          <BackButton></BackButton>
        </div>
      )}
      {viewingNote ? <NoteViewer></NoteViewer> : null}
    </div>
  )
}
