import { useState, Dispatch, SetStateAction, useEffect } from 'react'

const SOUND_FILE_NAMES = ['lowtone', 'hightone', 'highloudtone']

export let usesSound = false
let soundLibrary: SoundLibrary
let setSoundLibrary: Dispatch<SetStateAction<SoundLibrary>>

export function useSounds(): void {
  usesSound = true
  ;[soundLibrary, setSoundLibrary] = useState({})
  loadSoundLibrary()
}

export function playLowTone(): void {
  playAudio('lowtone')
}

export function playHightTone(): void {
  playAudio('hightone')
}

export function playHighLoudTone(): void {
  playAudio('highloudtone')
}

function loadSoundLibrary(): void {
  useEffect(() => SOUND_FILE_NAMES.forEach(setAudio), [])
}

function setAudio(fileName: string): void {
  soundLibrary[fileName] = new Audio(`sounds/${fileName}.mp3`)
}

function playAudio(fileName: string): void {
  soundLibrary[fileName].play()
  setAudio(fileName)
}

interface SoundLibrary {
  [soundName: string]: HTMLAudioElement
}
