import { playOpenSound } from '../util/sounds'
import { setWriteMode } from '../logic/appMode'

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
