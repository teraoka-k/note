import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import { Note } from '../logic/colllections/note'
import { NotePreview } from './notePreview'
import { Dispatch, SetStateAction } from 'react'
import { notes, useNotes } from '../states/notes'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Scrollbar } from 'swiper'

SwiperCore.use([Pagination, Scrollbar])

export const NotePreviewer = (props: {
  setViewingNote: Dispatch<SetStateAction<Note>>
}) => {
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
          <div onClick={() => props.setViewingNote(note)}>
            <NotePreview note={note}></NotePreview>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
