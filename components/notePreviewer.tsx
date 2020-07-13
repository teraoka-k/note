import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import { NotePreview } from './notePreview'
import { notes, useNotes } from '../states/notes'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Scrollbar } from 'swiper'
import { setViewingNote } from '../states/viewingNote'

SwiperCore.use([Pagination, Scrollbar])

export const NotePreviewer = () => {
  useNotes()
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoHeight={true}
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
