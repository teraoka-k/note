import { WriteButton } from './writeButton'
import { ReadButton } from './readButton'
import { middle } from '../styles/styles'

export const Home = () => (
  <div style={middle}>
    <WriteButton></WriteButton>
    <ReadButton></ReadButton>
  </div>
)
