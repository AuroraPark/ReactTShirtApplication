import { createRoot } from 'react-dom/client'
import './styles.css'
import { App as Canvas } from './Canvas'
import Overay from './Overlay'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <>
    <Canvas />
    <Overay />
  </>
)
