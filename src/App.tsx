import './App.css'
import { AboutMe } from './pages/AboutMe'
import { Contact } from './pages/Contact'
import Presentation from './pages/Presentation'
import { Proyects } from './pages/Proyects'
import StackAndTools from './pages/StackAndTools'

function App() {


  return (
    <>
      <Presentation/>
      <StackAndTools/>
      <Proyects/>
      <AboutMe/>
      <Contact/>
    </>
  )
}

export default App
