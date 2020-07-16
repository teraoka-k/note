import { useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { cacheData, getCache } from '../cache/cache'
import {
  splitVertical,
  buttons,
  splitHorizontal,
  leftPane,
  rightPane,
} from '../styles/styles'
import { windowHeight } from '../states/windowSize'
import { BackButton } from './backButton'
import { SaveButton } from './saveButton'
import { isWriteMode } from '../states/appMode'
import { viewingNote } from '../states/viewingNote'

enum Mode {
  IN,
  OUT,
}

export const Writer = () => {
  // states
  const [src, setSrc] = useState(
    isWriteMode()
      ? getCache('writing') || '# Markdown Editor\n\nwrite a note here'
      : viewingNote.text
  )
  const [mode, setMode] = useState(Mode.IN)

  // reference to child components
  const inputElement = useRef(null)
  const outputElement = useRef(null)

  return (
    <div>
      <div style={buttons}>
        <SaveButton src={src}></SaveButton>
        <BackButton></BackButton>
      </div>
      <textarea
        style={leftPane}
        onChange={(e) => {
          setSrc(e.target.value)
          cacheData('writing', src)
        }}
        onMouseEnter={() => setMode(Mode.IN)}
        onTouchStart={() => setMode(Mode.IN)}
        onScroll={(e) => {
          if (mode == Mode.IN) {
            outputElement.current.scrollTop =
              (e.currentTarget.scrollTop /
                (e.currentTarget.scrollHeight - windowHeight)) *
              (outputElement.current.scrollHeight - windowHeight)
          }
        }}
        ref={inputElement}
        value={src}
      ></textarea>
      <div
        style={rightPane}
        onMouseEnter={() => setMode(Mode.OUT)}
        onTouchStart={() => setMode(Mode.OUT)}
        onScroll={(e) => {
          if (mode == Mode.OUT) {
            inputElement.current.scrollTop =
              (e.currentTarget.scrollTop /
                (e.currentTarget.scrollHeight - windowHeight)) *
              (inputElement.current.scrollHeight - windowHeight)
          }
        }}
        ref={outputElement}
      >
        <ReactMarkdown source={src}></ReactMarkdown>
      </div>
    </div>
  )
}
