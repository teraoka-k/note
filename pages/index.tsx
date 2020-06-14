import { MdEditor } from '../components/MdEditor'
import { center } from '../styles/styles'
import { useState } from 'react'
import { playOpenSound } from '../util/sounds'

enum AppMode {
  home,
  write,
  read,
}

export default function index() {
  const [mode, setMode] = useState(AppMode.home)

  return (
    <div id="app" style={center}>
      {isHomeMode() ? (
        <div>
          <button
            onClick={() => {
              playOpenSound()
              setWriteMode()
            }}
          >
            Write
          </button>
          <button
            onClick={() => {
              playOpenSound()
              setReadMode()
            }}
          >
            Read
          </button>
        </div>
      ) : null}
      <div>
        {isWriteMode() ? <MdEditor setHomeMode={setHomeMode}></MdEditor> : null}
      </div>
    </div>
  )

  function isHomeMode(): boolean {
    return mode == AppMode.home
  }
  function isWriteMode(): boolean {
    return mode == AppMode.write
  }
  function isReadMode(): boolean {
    return mode == AppMode.read
  }
  function setHomeMode(): void {
    setMode(AppMode.home)
  }
  function setWriteMode(): void {
    setMode(AppMode.write)
  }
  function setReadMode(): void {
    setMode(AppMode.read)
  }
}
