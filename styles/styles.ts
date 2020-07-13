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
