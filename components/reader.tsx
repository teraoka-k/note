import { BackButton } from './backButton'
import { center } from '../styles/styles'
import { NoteViewer } from './noteViewer'
import { NotePreviewer } from './notePreviewer'
import { useViewingNote, viewingNote } from '../states/viewingNote'

export const Reader = () => {
  useViewingNote()

  return (
    <div>
      <NotePreviewer></NotePreviewer>
      {!viewingNote ? <BackButton style={center}></BackButton> : null}
      {viewingNote ? <NoteViewer></NoteViewer> : null}
    </div>
  )
}
