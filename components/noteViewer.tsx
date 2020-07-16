import ReactMarkdown from 'react-markdown'
import { viewingNote } from '../states/viewingNote'
import { viewer } from '../styles/styles'

export const NoteViewer = () => (
  <div style={viewer}>
    {viewingNote ? (
      <ReactMarkdown source={viewingNote.text}></ReactMarkdown>
    ) : null}
  </div>
)
