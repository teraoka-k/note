import { playOpenSound } from '../util/sounds'
import { setWriteMode, setRewriteMode } from '../states/appMode'

export const WriteButton = (props: { rewrites?: boolean }) => (
  <button
    onClick={() => {
      playOpenSound()
      if (props.rewrites) setRewriteMode()
      else setWriteMode()
    }}
  >
    Write
  </button>
)
