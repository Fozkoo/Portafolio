import './App.css'
import { AboutMe } from './pages/AboutMe'
import { Contact } from './pages/Contact'
import Footer from './pages/Footer'
import Presentation from './pages/Presentation'
import { Proyects } from './pages/Proyects'
import StackAndTools from './pages/StackAndTools'
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {


  return (
    <>
      <Presentation/>
      <StackAndTools/>
      <Proyects/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
