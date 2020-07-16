import {
  isWriteMode,
  isReadMode,
  useAppMode,
  isRewriteMode,
} from '../states/appMode'
import { Reader } from '../components/reader'
import { Writer } from '../components/writer'
import { useWindowSize } from '../states/windowSize'
import { useSounds } from '../states/soundLibrary'

export default () => {
  useAppMode()
  useWindowSize()
  useSounds()

  return (
    <div id="app">
      {isWriteMode() || isRewriteMode() ? <Writer></Writer> : null}
      {isReadMode() ? <Reader></Reader> : null}
    </div>
  )
}
