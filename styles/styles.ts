import { CSSProperties } from 'react'

export const horizontallyCenter: CSSProperties = {
  display: 'table',
  margin: '0 auto',
}

export const buttons = Object.assign(
  {
    marginTop: '3%',
  } as CSSProperties,
  horizontallyCenter
)

export const viewer = Object.assign(
  {
    marginTop: '3%',
  } as CSSProperties,
  horizontallyCenter
)

const sidePane = {
  margin: '1% 2%',
  top: `5%`,
  height: `90%`,
  width: '45%',
  position: 'fixed',
}
export const leftPane = Object.assign(
  {
    left: 0,
  } as CSSProperties,
  sidePane
)

export const rightPane = Object.assign(
  {
    right: 0,
    overflow: 'auto',
  } as CSSProperties,
  sidePane
)
