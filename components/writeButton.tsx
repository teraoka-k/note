import { playOpenSound } from '../util/sounds'
import { setWriteMode } from '../states/appMode'

export const WriteButton = () => (
  <button
    onClick={() => {
      playOpenSound()
      setWriteMode()
    }}
  >
    Write
  </button>
)
