import { playEnterSound } from '../util/sounds'
import { setHomeMode } from '../states/appMode'
import { clearCache } from '../cache/cache'

export const SaveButton = (props: { src: string }) => (
  <button
    onClick={() => {
      playEnterSound()
      fetch('/api/note', {
        method: 'post',
        body: JSON.stringify({ text: props.src }),
      })
      setHomeMode()
      clearCache('writing')
    }}
  >
    Save
  </button>
)
