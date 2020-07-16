import { setReadMode } from '../states/appMode'
import { playLowTone } from '../states/soundLibrary'

export const ReadButton = () => (
  <button
    onClick={() => {
      playLowTone()
      setReadMode()
    }}
  >
    Read
  </button>
)
