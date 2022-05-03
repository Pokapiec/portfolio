import './Main.scss'
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Tech from './Components/Tech/Tech';
import Contact from './Components/Contact/Contact';
import Socials from './Components/Socials/Socials';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';



function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Header/>
      <About/>
      <Tech/>
      <Services />
      <Projects/>
      <Contact/>
      <Socials/>
    </div>
  )
}

export default App;
