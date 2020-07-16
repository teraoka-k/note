import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import { NotePreview } from './notePreview'
import { notes, useNotes } from '../states/notes'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Scrollbar } from 'swiper'
import { setViewingNote } from '../states/viewingNote'
import { windowWidth } from '../states/windowSize'
import { previewer } from '../styles/styles'

SwiperCore.use([Pagination, Scrollbar])

export const NotePreviewer = () => {
  useNotes()
  return (
    <div style={previewer}>
      <Swiper
        spaceBetween={windowWidth / 100}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        freeMode={true}
      >
        {notes.map((note) => (
          <SwiperSlide key={note._id}>
            <div onClick={() => setViewingNote(note)}>
              <NotePreview note={note}></NotePreview>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
