import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Note } from '../logic/colllections/note'

interface Props {
  note: Note
}

export const NotePreview = (props: Props) => {
  return <ReactMarkdown source={props.note.text.substr(0, 50)}></ReactMarkdown>
}
