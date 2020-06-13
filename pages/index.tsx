import { MdEditor } from '../components/MdEditor'
import { center } from '../styles/styles'
import {
  isHomeMode,
  setWriteMode,
  setReadMode,
  isWriteMode,
  appMode,
  AppMode,
} from '../states/appMode'
import { useState } from 'react'

export default function index() {
  const [mode, setMode] = useState(appMode)
  return (
    <div id="app" style={center}>
      {isHomeMode() ? (
        <div>
          <div
            onClick={() => {
              new Audio('sounds/ui1.mp3').play()
              setWriteMode()
              setMode(AppMode.write)
            }}
          >
            Write
          </div>
          <div
            onClick={() => {
              new Audio('sounds/ui2.mp3').play()
              setReadMode()
              setMode(AppMode.read)
            }}
          >
            Read
          </div>
        </div>
      ) : null}
      <div>{isWriteMode() ? <MdEditor></MdEditor> : null}</div>
    </div>
  )
}
