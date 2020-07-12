/**
 * @private
 */
function loadSound(fileName: string, volume: number = 1): HTMLAudioElement {
  const sound = new Audio(`sounds/${fileName}.mp3`)
  sound.volume = volume
  return sound
}

export function playOpenSound(): void {
  loadSound('open').play()
}

export function playCloseSound(): void {
  loadSound('close').play()
}

export function playEnterSound(): void {
  loadSound('enter').play()
}
