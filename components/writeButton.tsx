import { setWriteMode, setRewriteMode } from '../states/appMode'
import { playLowTone } from '../states/soundLibrary'

export const WriteButton = (props: { rewrites?: boolean }) => (
  <button
    onClick={() => {
      playLowTone()
      if (props.rewrites) setRewriteMode()
      else setWriteMode()
    }}
  >
    Write
  </button>
)
