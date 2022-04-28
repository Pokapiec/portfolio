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
        <h2>About me</h2>
        <p>I'm a developer mostly using Python programing language for backend and React.js as a forntend framework. I'm open to learning new technologies even not connected to web developement. Nevertheless, nowadays i strongy focus on web and i want to learn how to develop best possible production ready web apps.</p>
        <br />
        <p>I graduated from the Warsaw University of Technology and now i'm pursuing a Masters degree in Computer Science at the same university.</p>

        <div className='flex'>
          <div>
            <b>Current status: </b> Student
          </div>
          <div>
            <b>Role: </b> Full stack developer | Data engenieer
          </div>
          <div>
            <b>Degree: </b> Engenieer in Automatition and Robotics
          </div>
 
          <div>
            <b>Living: </b> Warsaw, Poland
          </div>
        </div>

      </div>
    </section>
  )
}
