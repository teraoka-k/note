import { playCloseSound } from '../util/sounds'
import { backMode } from '../states/appMode'
export const BackButton = () => (
  <button
    onClick={() => {
      playCloseSound()
      backMode()
    }}
  >
    Back
  </button>
)
