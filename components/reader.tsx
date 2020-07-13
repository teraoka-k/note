import { BackButton } from './backButton'
import { middle, horizontallyCenter } from '../styles/styles'
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
        <div style={middle}>
          <BackButton></BackButton>
        </div>
      ) : (
        <div style={horizontallyCenter}>
          <WriteButton rewrites={true}></WriteButton>
          <DeleteButton></DeleteButton>
          <BackButton></BackButton>
        </div>
      )}
      {viewingNote ? <NoteViewer></NoteViewer> : null}
    </div>
  )
}
