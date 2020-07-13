import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NotePreview } from './notePreview'
import { useNotes, notes } from '../states/notes'
import { useState } from 'react'
import { Note } from '../logic/colllections/note'
import { BackButton } from './backButton'
import { center } from '../styles/styles'
import { NoteViewer } from './noteViewer'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export const Reader = () => {
  useNotes()
  const [viewingNote, setViewingNote] = useState(null as Note)

  return (
    <div>
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
      {!viewingNote ? <BackButton style={center}></BackButton> : null}
      {viewingNote ? <NoteViewer note={viewingNote}></NoteViewer> : null}
    </div>
  )
}
