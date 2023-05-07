import React from 'react'
import { useInView } from 'react-intersection-observer';
import DevAnim from '../../images/dev.png';
import './About.scss';


export default function About() {
  let options = {
    threshold: 0.3,
    triggerOnce: true
  }

  const [AboutRef, AboutInView] = useInView(options)


  return (
    <section className='about' ref={AboutRef} >
      <img src={DevAnim} alt="" />
      <div className={`${AboutInView ? "about-section-active" : "about-section-passive"}`}>
        <div className='title-container'>
          <h2>About me</h2>
        </div>
        <p>I'm a developer mostly using Python programming language for backend with Django framework and React.js as a frontend library. I'm open to learning new technologies even not connected to web developement. Nevertheless, nowadays i strongy focus on creating websites and i'm eager to learn more and more to become the best software engineer i can be.</p>
        <br />
        <p>I graduated from the Warsaw University of Technology and now i'm pursuing a Masters degree in Computer Science at the same university.</p>

        <div className='flex'>
          <div>
            <b>Current status: </b> Student | Employed
          </div>
          <div>
            <b>Roles: </b> Backend developer | Full stack developer | Data engineer
          </div>
          <div>
            <b>Degree: </b> Engineer in Automation and Robotics
          </div>
 
          <div>
            <b>Living: </b> Warsaw, Poland
          </div>
        </div>

      </div>
    </section>
  )
}
