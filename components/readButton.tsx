import { playOpenSound } from '../util/sounds'
import { setReadMode } from '../states/appMode'

export const ReadButton = () => (
  <button
    onClick={() => {
      playOpenSound()
      setReadMode()
    }}
  >
    Read
  </button>
)
