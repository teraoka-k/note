import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Note } from '../logic/colllections/note'
import { NotePreview } from './notePreview'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

interface ReadModeProps {
  notes: Note[]
}

export const ReadMode = (props: ReadModeProps) => (
  <div>
    <button>write</button>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={Navigation}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {props.notes.map((note) => (
        <SwiperSlide key={note._id}>
          <NotePreview note={note}></NotePreview>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)
