import ReactMarkdown from 'react-markdown'
import { Note } from '../logic/colllections/note'

interface Props {
  note: Note
}

export const NotePreview = (props: Props) => (
  <ReactMarkdown source={props.note.text.match(/^(.*)$/m)[1]}></ReactMarkdown>
)
