import React from 'react'
import { useEffect, useState } from 'react';
import './Navbar.scss';
import BurgerIcon from '../../icons/burger.svg';
import LinkedInIcon from '../../icons/linkedin.svg';
import EmailIcon from '../../icons/email.svg';
import GitHubIcon from '../../icons/github.svg';


export default function Navbar() {
    const [about, setAbout] = useState(null);
    const [skills, setSkills] = useState(null);
    const [projects, setProjects] = useState(null);
    const [contact, setContact] = useState(null);
    const [nav, setNav] = useState(null);



    useEffect(() => {
        const aboutElem = document.querySelector('.about')
        const skillsElem = document.querySelector('.tech')
        const projectsElem = document.querySelector('main')
        const contactElem = document.getElementById('contact')
        const navElem = document.querySelector('nav')
        console.log()

        setAbout(aboutElem)
        setSkills(skillsElem)
        setProjects(projectsElem)
        setContact(contactElem)
        setNav(navElem)
    }, [])


    const toggleNav = () => { nav.classList.toggle('responsive') }
    const scrollToAbout = () => {
        about.scrollIntoView({ behavior: "smooth" })
        toggleNav()
    }
    const scrollToSkills = () => {
        skills.scrollIntoView({ behavior: "smooth" })
        toggleNav()
    }
    const scrollToProjects = () => {
        projects.scrollIntoView({ behavior: "smooth" })
        toggleNav()

    }
    const scrollToContact = () => {
        contact.scrollIntoView({ behavior: "smooth" })
        toggleNav()
    }

    return (
        <nav >
            <ul>
                <li onClick={toggleNav} className='burger'><img src={BurgerIcon} alt="-" /></li>
                <li onClick={scrollToAbout}>About</li>
                <li onClick={scrollToSkills}>Skills</li>
                <li onClick={scrollToProjects}>Projects</li>
                <li onClick={scrollToContact}>Contact</li>
                <div className='nav-socials'>
                    <a href="https://github.com/Pokapiec" target="_blank">
                        <img src={GitHubIcon} alt="git" />
                    </a>
                    <a href="https://www.linkedin.com/in/pawe%C5%82-okapiec/" target="_blank">
                        <img src={LinkedInIcon} alt="linkedin" />
                    </a>
                    <div className='email' onClick={scrollToContact}>
                        <img src={EmailIcon} alt="email" />
                    </div>
                </div>
            </ul>
        </nav>
    )
}
