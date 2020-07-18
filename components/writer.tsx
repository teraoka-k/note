import { useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { cacheData, getCache } from '../cache/cache'
import { buttons, leftPane, rightPane } from '../styles/styles'
import { windowHeight } from '../states/windowSize'
import { BackButton } from './backButton'
import { SaveButton, saveNote } from './saveButton'
import { isWriteMode } from '../states/appMode'
import { viewingNote } from '../states/viewingNote'

enum Mode {
  IN,
  OUT,
}

export const Writer = () => {
  // states
  const [src, setSrc] = useState(
    isWriteMode() ? getCache('writing') || '' : viewingNote.text
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
        autoFocus
        placeholder="# Write Markdown here"
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
        onKeyDown={(e) => {
          if (e.ctrlKey && e.key == 'Enter') saveNote(src)
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
