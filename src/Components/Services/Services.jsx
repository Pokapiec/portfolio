import React from 'react';
import './Services.scss';
import { useInView } from 'react-intersection-observer';
import PaletteIcon from '../../icons/palette.svg';
import RobotIcon from '../../icons/robot.svg';
import ScrewdriverIcon from '../../icons/screwdriver.svg';
import GaugeIcon from '../../icons/gauge-high.svg';
import ComputerIcon from '../../icons/computer.svg';



export default function Services() {

    const services = {
        "REST API's": {
            desc: "Creating web API's using Python or Node.js frameworks",
            icon: ComputerIcon
        },
        "Web scrapers": {
            desc: "Developing data gathering pipelines in Python",
            icon: ScrewdriverIcon
        },
        "NLP": {
            desc: "Natural language processing usages such as chatbots",
            icon: RobotIcon
        },
        "Automation": {
            desc: "Preparing automation scripts for any repetitive tasks",
            icon: GaugeIcon
        },
        "Frontend": {
            desc: "Creating user interfaces using frontend frameworks or in Vanilla JS",
            icon: PaletteIcon
        }
    }

    let options = {
        threshold: 0.3,
        triggerOnce: true
    }

    const [ServiceRef, ServiceInView] = useInView(options)


    return (
        <section className='services' ref={ServiceRef}>
            <h2>Services</h2>
            <div className='services-grid'>
                {Object.keys(services).map((elem) => (
                    <div key={elem} className={`grid-elem ${ServiceInView ? 'shown' : 'hidden'}`}>
                        <div className='indicator'></div>
                        <div className='icon'>
                            <img src={services[elem].icon} alt="" />
                        </div>
                        <h4>{elem}</h4>
                        <p>{services[elem].desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
