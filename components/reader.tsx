import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NotePreview } from './notePreview'
import { useNotes, notes } from '../states/notes'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export const Reader = () => {
  useNotes()

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={Navigation}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {notes.map((note) => (
        <SwiperSlide key={note._id}>
          <NotePreview note={note}></NotePreview>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
