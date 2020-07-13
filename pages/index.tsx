import { center } from '../styles/styles'
import {
  isHomeMode,
  isWriteMode,
  isReadMode,
  useAppMode,
} from '../states/appMode'
import { Reader } from '../components/reader'
import { Writer } from '../components/writer'
import { Home } from '../components/home'

export default () => {
  useAppMode()

  return (
    <div id="app" style={center}>
      {isHomeMode() ? <Home></Home> : null}
      {isWriteMode() ? <Writer></Writer> : null}
      {isReadMode() ? <Reader></Reader> : null}
    </div>
  )
}
