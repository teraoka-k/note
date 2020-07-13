import { useState, Dispatch, SetStateAction, useEffect } from 'react'

export let windowHeight: number
export let setWindowHeight: Dispatch<SetStateAction<number>>
export let windowWidth: number
export let setWindowWidth: Dispatch<SetStateAction<number>>

export function useWindowSize() {
  ;[windowHeight, setWindowHeight] = useState(0)
  ;[windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    const adaptWindowSize = () => {
      setWindowHeight((window.innerHeight * 0.9) / 2.1)
      setWindowWidth(window.innerWidth * 0.9 - 20)
    }
    adaptWindowSize()
    window.addEventListener('resize', adaptWindowSize)
  })
}
