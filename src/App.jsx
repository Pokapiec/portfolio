import './Main.scss'
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Tech from './Components/Tech/Tech';
import Contact from './Components/Contact/Contact';
import Socials from './Components/Socials/Socials';
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Header/>
      <About/>
      <Tech/>
      <Projects/>
      <Contact/>
      <Socials/>
    </div>
  )
}

export default App;
