import { setWriteMode } from '../states/appMode'
import { playLowTone } from '../states/soundLibrary'

export const WriteButton = () => (
  <button
    onClick={() => {
      playLowTone()
      setWriteMode()
    }}
  >
    Add
  </button>
)
