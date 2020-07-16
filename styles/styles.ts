import { CSSProperties } from 'react'

export const center: CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
}
export const horizontallyCenter: CSSProperties = {
  display: 'table',
  margin: '0 auto',
}

/**
 *
 * @param from range (%)
 * @param to  range (%)
 */
export const splitVertical = (from: number, to: number): CSSProperties => {
  return {
    top: `${from}%`,
    height: `${to - from}%`,
    width: '100%',
    position: 'fixed',
    left: 0,
    right: 0,
  }
}

/**
 *
 * @param from range (%)
 * @param to  range (%)
 */
export const splitHorizontal = (from: number, to: number): CSSProperties => {
  return {
    left: `${from}%`,
    width: `${to - from}%`,
    height: '100%',
    position: 'fixed',
  }
}

export const middle = Object.assign(
  splitVertical(46, 50),
  splitHorizontal(45, 55)
)

export const buttons = Object.assign(
  {
    marginTop: '3%',
  } as CSSProperties,
  horizontallyCenter
)

export const previewer = Object.assign(
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

export const editor = Object.assign(
  {
    width: '90%',
    height: '45%',
    overflow: 'auto',
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
