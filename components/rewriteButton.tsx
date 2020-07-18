import { setRewriteMode } from '../states/appMode'
import { playLowTone } from '../states/soundLibrary'

export const RewriteButton = () => (
  <button
    onClick={() => {
      playLowTone()
      setRewriteMode()
    }}
  >
    Modify
  </button>
)
