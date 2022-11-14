import NavBar from './components/navBar/navBar'
import Slider from './components/Slider/Slider'
import Skill from './components/Skill/Skill'
import Projects from './components/Projects/Projects'
import GoTopBtn from './components/GoTopBtn/GoTopBtn'
import Footer from './components/Footer/Footer'
import './App.css';
import React, {useState, useEffect} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {

  const [goTop, setGoTop] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY >= 200) {
            setGoTop(true)
        } else {
            setGoTop(false)
        }
    }
      window.addEventListener('scroll', handleScroll)
      return () => {
       window.removeEventListener('scroll', handleScroll)
      }
}, [])

  const goTopHandler = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }   

  return (
    <div className="App">   
      <NavBar/>
      <Slider className='app-slide'/>
      <Skill className='app-skill'/>
      <div className='projects-wrapper'>        
      <h1 className='projects-title'>My Projects</h1>
      <Projects/>
      <Footer/>
      {goTop && <GoTopBtn goTop={goTopHandler}/>}
      </div>
    </div>
  );
}

export default App;
