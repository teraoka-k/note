import { useState } from 'react'
import { Note } from '../logic/colllections/note'
import { BackButton } from './backButton'
import { center } from '../styles/styles'
import { NoteViewer } from './noteViewer'
import { NotePreviewer } from './notePreviewer'

export const Reader = () => {
  const [viewingNote, setViewingNote] = useState(null as Note)

  return (
    <div>
      <NotePreviewer setViewingNote={setViewingNote}></NotePreviewer>
      {!viewingNote ? <BackButton style={center}></BackButton> : null}
      {viewingNote ? <NoteViewer note={viewingNote}></NoteViewer> : null}
    </div>
  )
}
