import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Projects.scss';
import ChatbotImg from '../../images/chatbot.jpg';
import FleetImg from '../../images/fleet-pom.jpg';
import RocketImg from '../../images/rocket1.jpg';
import LanesImg from '../../images/lanes1.jpg';
import KursBookImg from '../../images/kursbook-main.jpg';

import GitIcon from '../../icons/github.svg';

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
// import 'react-awesome-slider/dist/styles.css';

export default function Projects() {
    let options = {
        threshold: 0.3,
        triggerOnce: true
    }
    const [ProjectsRef, ProjectsInView] = useInView(options)


    const projectsData = [
        {
            name: "Chatbot web app",
            img: ChatbotImg,
            repo_url: "https://github.com/Pokapiec/chatbot-web-app"
        },
        {
            name: "Vehicle fleet system",
            img: FleetImg,
            repo_url: "https://github.com/Pokapiec/vehicle-fleet"
        },
        {
            name: "Flying objects image classification",
            img: RocketImg,
            repo_url: "https://github.com/Pokapiec/Rocket_jet_recognition"
        },
        {
            name: "Driving lanes recognition",
            img: LanesImg,
            repo_url: "https://github.com/Pokapiec/Lane-Signs-detection"
        },
        {
            name: "Course system web app",
            img: KursBookImg,
            repo_url: "https://github.com/Pokapiec/Learning-platform-flask-app"
        }
    ]

    const [projects, setProjects] = useState(projectsData);

    return (
        <main ref={ProjectsRef}>
            <h2>Projects</h2>
            <div className='projects-container'>

                {projects.map((elem) => (
                    <div className={`project ${ProjectsInView ? 'shown' : 'hidden'}`} key={elem.name}>
                        {/* <img src={elem.img} alt="" /> */}
                        <div className='proj-img' style={{ backgroundImage: `url(${elem.img})` }}></div>
                        <div className='hover-info'>
                            <div><b>{elem.name}</b></div>
                            <a href={elem.repo_url} target="_blank">Read more</a>
                            <a href={elem.repo_url} target="_blank">
                                <img className='icon' src={GitIcon} alt="" />
                            </a>
                        </div>
                    </div>
                ))}

            </div>
            {/* <h2>My work</h2>
        <AwesomeSlider>
            <div data-src={ChatbotImg}></div>
            <div data-src={FleetImg}></div>
            <div data-src={RocketImg}></div>
            <div data-src={LanesImg}></div>
            <div data-src={KursBookImg}></div>

           
        </AwesomeSlider> */}
        </main>
    )
}


{/* <div>
<img src={ChatbotImg} alt="chatbot" />
<p className='legend'>Chatbot</p>
</div>
<div>
<img src={FleetImg} alt="fleet" />
<p className='legend'>Chatbot2</p>
</div>
<div>
<img src={RocketImg} alt="rockgsset" />
<p className='legend'>Chatbot4</p>
</div>
<div>
<img src={LanesImg} alt="chatbdsot" />
<p className='legend'>Chatbot7</p>
</div>
<div>
<img src={KursBookImg} alt="chatbogt" />
<p className='legend'>Chatbot9</p>
</div> */}