import navbarLogo from '../assets/navbarLogo.png'
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaHandPointUp } from "react-icons/fa";
import HomeDiv from './HomeDiv';
import Skills from './Skills';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

import { motion } from "framer-motion"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isSkills, setIsSkills] = useState(false);
    const [servicesScroll, setServicesScroll] = useState(false);
    const [portfolioScroll, setPortfolioScroll] = useState(false);
    const skillsRef = useRef(null);
    const servicesRef = useRef(null);
    const portfolioRef = useRef(null);


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


    useEffect(() => {
        const handleScroll = () => {
            const skillsDivHeight = skillsRef.current.offsetHeight - 500;
            const isSkillscrolled = window.scrollY > skillsDivHeight;
            setIsSkills(isSkillscrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    // useEffect(() => {
    //     const handleServicesScroll = () => {
    //         const serviceDivHeight = servicesRef.current.offsetHeight - 900;
    //         const isServicesScroll = window.scrollY > serviceDivHeight;
    //         setServicesScroll(isServicesScroll);
    //     };

    //     window.addEventListener('scroll', handleServicesScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleServicesScroll);
    //     };

    // }, []);


    useEffect(() => {
        const handlePortfolioScroll = () => {
            const portfolioDivHeight = portfolioRef.current.clientHeight;
            const isPortfolioScroll = window.scrollY > portfolioDivHeight;
            setPortfolioScroll(isPortfolioScroll);
        };

        window.addEventListener('scroll', handlePortfolioScroll);

        return () => {
            window.removeEventListener('scroll', handlePortfolioScroll);
        };

    }, []);


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
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav nav-pills pe-4">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">
                                    Home
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
                                <a className="nav-link" href="#service">
                                    services
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
                                <a className="nav-link" href="#contact">
                                    contact
                                    <span id="line"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary rounded-2" tabIndex="0">
                <div id='home' className="homeDiv px-3">
                    <HomeDiv />
                </div>
                <div id='skills' className="skillsDiv px-3 py-5 pb-0 pb-lg-4" ref={skillsRef} style={{ visibility: isSkills && "visible" }}>
                    <Skills scrolled={isSkills} />
                </div>
                <div id='service' className="services px-3 my-5" ref={servicesRef}
                    // style={{ visibility: servicesScroll && "visible" }}
                    style={{ visibility: "visible" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <Services scrolled={servicesScroll} />
                    </motion.div>
                </div>
                <div id='portfolio' className="portfolio" ref={portfolioRef}
                    style={{ visibility: portfolioScroll && "visible" }}
                >
                    <Portfolio scrolled={portfolioScroll} />
                </div>
                <div id='contact' className="contact px-5 pt-5 py-5">
                    <Contact />
                </div>

                <div className="footer">
                    <Footer />
                </div>

                <a href="#home" className="topBtn" style={{ visibility: scrolled ? "visible" : "hidden" }}>
                    <FaHandPointUp />
                </a>
            </div>
        </>
    )
}