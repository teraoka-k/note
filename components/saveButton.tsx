import { playEnterSound } from '../util/sounds'
import { setHomeMode } from '../states/appMode'

export const SaveButton = (props: { src: string }) => (
  <button
    onClick={() => {
      playEnterSound()
      fetch('/api/note', {
        method: 'post',
        body: JSON.stringify({ text: src }),
      })
      setHomeMode()
    }}
  >
    Save
  </button>
)
