import { Note } from '../model/note'

interface Props {
  note: Note
}

export const NotePreview = (props: Props) => (
  <div>{props.note.text.match(/^(.*)$/m)[1]}</div>
)
