import { WriteButton } from './writeButton'
import { BackButton } from './backButton'
import ReactMarkdown from 'react-markdown'
import { DeleteButton } from './deleteButton'
import { viewingNote } from '../states/viewingNote'

export const NoteViewer = () => (
  <div
    style={{
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, 0%)',
    }}
  >
    {viewingNote ? (
      <div>
        <WriteButton></WriteButton>
        <DeleteButton></DeleteButton>
        <BackButton></BackButton>
        <ReactMarkdown source={viewingNote.text}></ReactMarkdown>
      </div>
    ) : null}
  </div>
)
