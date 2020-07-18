import { setRewriteMode } from '../states/appMode'

export const RewriteButton = () => (
  <button onClick={setRewriteMode}>Modify</button>
)
