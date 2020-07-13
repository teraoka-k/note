import {
  isHomeMode,
  isWriteMode,
  isReadMode,
  useAppMode,
} from '../states/appMode'
import { Reader } from '../components/reader'
import { Writer } from '../components/writer'
import { Home } from '../components/home'
import { useWindowSize } from '../states/windowSize'

export default () => {
  useAppMode()
  useWindowSize()

  return (
    <div id="app">
      {isHomeMode() ? <Home></Home> : null}
      {isWriteMode() ? <Writer></Writer> : null}
      {isReadMode() ? <Reader></Reader> : null}
    </div>
  )
}
