import { CSSProperties } from 'react'

export const center: CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
}

const extend = Object.assign(
  {
    backgroundColor: '#fff',
  } as CSSProperties,
  center
)
