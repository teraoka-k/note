import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { cacheData, getCache } from '../cache/cache'
import { center } from '../styles/styles'
import { appMode, AppMode, setHomeMode } from '../states/appMode'

export interface MdEditorProps {
  template?: string
}

enum Mode {
  IN,
  OUT,
}

export const MdEditor = (props: MdEditorProps) => {
  // states
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [src, setSrc] = useState(
    getCache('writing') ||
      props.template ||
      '# Markdown Editor\n\nwrite a note here'
  )
  const [mode, setMode] = useState(Mode.IN)
  const [applicationMode, setAppmode] = useState(appMode)

  // reference to child components
  const inputElement = useRef(null)
  const outputElement = useRef(null)

  // after mount
  // - auto resize window
  useEffect(() => {
    const adaptWindowSize = () => {
      setHeight((window.innerHeight * 0.9) / 2.1)
      setWidth(window.innerWidth * 0.9 - 20)
    }
    adaptWindowSize()
    window.addEventListener('resize', adaptWindowSize)
  }, [])

  return (
    <div>
      <textarea
        style={{ height: `${height}px`, width: `${width}px` }}
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
                (e.currentTarget.scrollHeight - height)) *
              (outputElement.current.scrollHeight - height)
          }
        }}
        ref={inputElement}
        value={src}
      ></textarea>
      <div style={center}>
        <div
          onClick={() => {
            setHomeMode()
            setAppmode(AppMode.home)
          }}
        >
          Save
        </div>
        <div>Back</div>
      </div>
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          overflow: 'auto',
        }}
        onMouseEnter={() => setMode(Mode.OUT)}
        onTouchStart={() => setMode(Mode.OUT)}
        onScroll={(e) => {
          if (mode == Mode.OUT) {
            inputElement.current.scrollTop =
              (e.currentTarget.scrollTop /
                (e.currentTarget.scrollHeight - height)) *
              (inputElement.current.scrollHeight - height)
          }
        }}
        ref={outputElement}
      >
        <ReactMarkdown source={src}></ReactMarkdown>
      </div>
    </div>
  )
}
