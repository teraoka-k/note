import { playCloseSound } from '../util/sounds'
import { backMode } from '../states/appMode'
import { CSSProperties } from 'react'

export const BackButton = (props: { style?: CSSProperties }) => (
  <button
    style={props.style}
    onClick={() => {
      playCloseSound()
      backMode()
    }}
  >
    Back
  </button>
)
