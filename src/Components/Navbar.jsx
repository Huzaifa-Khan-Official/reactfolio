import navbarLogo from '../assets/navbarLogo.png'
import bannerImg2 from '../assets/bannerImg2.svg'
import { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import HomeDiv from './HomeDiv';
import Skills from './Skills';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);


    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg sticky-top ${scrolled && 'bg-scroll'}`}>
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="#">
                        <img src={navbarLogo} alt="" />
                    </a>
                    <button className="navbarToggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="togglerIcon">
                            <FaBars className='toggler' />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5 nav nav-pills pe-4">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">
                                    Home
                                    <span id="line"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">
                                    service
                                    <span id="line"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">
                                    portfolio
                                    <span id="line"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">
                                    skills
                                    <span id="line"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    contact
                                    <span id="line"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary rounded-2" tabIndex="0">
                <div id='home' className="homeDiv px-3">
                    <HomeDiv />
                </div>
                <div id='service' className="skillsDiv py-5">
                    <Skills />
                </div>
                <div id='portfolio' className="section">
                    <h1>portfolio</h1>
                </div>
                <div id='skills' className="section">
                    <h1>Skills</h1>
                </div>
                <div id='contact' className="section">
                    <h1>Contact</h1>
                </div>
            </div>
        </>
    )
}