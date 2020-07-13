import { WriteButton } from './writeButton'
import { ReadButton } from './readButton'
import { center } from '../styles/styles'

export const Home = () => (
  <div style={center}>
    <WriteButton></WriteButton>
    <ReadButton></ReadButton>
  </div>
)
