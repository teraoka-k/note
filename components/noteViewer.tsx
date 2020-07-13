import ReactMarkdown from 'react-markdown'
import { viewingNote } from '../states/viewingNote'
import { horizontallyCenter } from '../styles/styles'

export const NoteViewer = () => (
  <div style={horizontallyCenter}>
    {viewingNote ? (
      <ReactMarkdown source={viewingNote.text}></ReactMarkdown>
    ) : null}
  </div>
)
