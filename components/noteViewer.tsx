import { WriteButton } from './writeButton'
import { BackButton } from './backButton'
import ReactMarkdown from 'react-markdown'
import { Note } from '../logic/colllections/note'

export const NoteViewer = (props: { note: Note }) => (
  <div
    style={{
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, 0%)',
    }}
  >
    {props.note ? (
      <div>
        <WriteButton></WriteButton>
        <button>Delete</button>
        <BackButton></BackButton>
        <ReactMarkdown source={props.note.text}></ReactMarkdown>
      </div>
    ) : null}
  </div>
)
