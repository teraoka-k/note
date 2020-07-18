import { isWriteMode, isRewriteMode, setReadMode } from '../states/appMode'
import { clearCache } from '../cache/cache'
import { viewingNote } from '../states/viewingNote'
import { addNote, modifyNote } from '../states/notes'

export const SaveButton = (props: { src: string }) => (
  <button onClick={() => saveNote(props.src)}>Save</button>
)

export function saveNote(src: string) {
  if (isWriteMode()) addNote(src)
  else if (isRewriteMode()) modifyNote(src, viewingNote._id)
  setReadMode()
  clearCache('writing')
}
