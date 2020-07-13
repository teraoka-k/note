import { playEnterSound } from '../util/sounds'
import { setHomeMode, isWriteMode, isRewriteMode } from '../states/appMode'
import { clearCache } from '../cache/cache'
import { viewingNote } from '../states/viewingNote'

export const SaveButton = (props: { src: string }) => (
  <button
    onClick={() => {
      playEnterSound()

      if (isWriteMode())
        fetch('/api/note', {
          method: 'post',
          body: JSON.stringify({ text: props.src }),
        })
      else if (isRewriteMode())
        fetch('/api/note', {
          method: 'put',
          body: JSON.stringify({ text: props.src, id: viewingNote._id }),
        })

      setHomeMode()
      clearCache('writing')
    }}
  >
    Save
  </button>
)
