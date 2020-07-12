import { MdEditor } from '../components/mdEditor'
import { center } from '../styles/styles'
import { useState, useEffect } from 'react'
import { playOpenSound } from '../util/sounds'
import { Note } from '../logic/colllections/note'
import {
  isHomeMode,
  setReadMode,
  isWriteMode,
  setHomeMode,
  isReadMode,
  useAppMode,
} from '../logic/appMode'
import { WriteButton } from '../components/writeButton'
import { ReadMode } from '../components/readMode'
export default () => {
  useAppMode()
  const [notes, setNotes] = useState([] as Note[])

  useEffect(() => {
    async function fetchNotes() {
      const res = await fetch('api/notes')
      const data = await res.json()
      setNotes(data)
    }
    fetchNotes()
  }, [])

  return (
    <div id="app" style={center}>
      {isHomeMode() ? (
        <div>
          <WriteButton></WriteButton>
          <button
            onClick={() => {
              playOpenSound()
              async function fetchNotes() {
                const res = await fetch('api/notes')
                const data = await res.json()
                setNotes(data)
              }
              fetchNotes()
              setReadMode()
            }}
          >
            Read
          </button>
        </div>
      ) : null}
      {isWriteMode() ? <MdEditor setHomeMode={setHomeMode}></MdEditor> : null}
      {isReadMode() ? <ReadMode notes={notes}></ReadMode> : null}
    </div>
  )
}
