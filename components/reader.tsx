import { buttons } from '../styles/styles'
import { NoteViewer } from './noteViewer'
import { NotePreviewer } from './notePreviewer'
import { useViewingNote, viewingNote } from '../states/viewingNote'
import { WriteButton } from './writeButton'
import { DeleteButton } from './deleteButton'
import { RewriteButton } from './rewriteButton'

export const Reader = () => {
  useViewingNote()

  return (
    <div>
      <div style={buttons}>
        <WriteButton></WriteButton>
        {viewingNote ? <RewriteButton></RewriteButton> : null}
        {viewingNote ? <DeleteButton></DeleteButton> : null}
      </div>
      <NotePreviewer></NotePreviewer>
      {viewingNote ? <NoteViewer></NoteViewer> : null}
    </div>
  )
}
