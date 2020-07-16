import { backMode } from '../states/appMode'
import { playLowTone } from '../states/soundLibrary'
export const BackButton = () => (
  <button
    onClick={() => {
      playLowTone()
      backMode()
    }}
  >
    Back
  </button>
)
