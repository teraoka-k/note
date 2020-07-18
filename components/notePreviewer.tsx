import { NotePreview } from './notePreview'
import { notes, useNotes } from '../states/notes'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Scrollbar } from 'swiper'
import { setViewingNote } from '../states/viewingNote'
import { windowWidth } from '../states/windowSize'

SwiperCore.use([Pagination, Scrollbar])

export const NotePreviewer = () => {
  useNotes()
  return (
    <Swiper
      slidesPerView={
        windowWidth > 1000
          ? 7
          : windowWidth > 800
          ? 5
          : windowWidth > 300
          ? 3
          : 2
      }
      scrollbar={{ draggable: true }}
      freeMode
    >
      {notes.map((note) => (
        <SwiperSlide key={note._id}>
          <div onClick={() => setViewingNote(note)}>
            <NotePreview note={note}></NotePreview>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
