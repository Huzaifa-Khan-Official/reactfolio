import navbarLogo from '../assets/navbarLogo.png'
import bannerImg2 from '../assets/bannerImg2.svg'
import { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";

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

            <nav className={`navbar navbar-expand-md sticky-top ${scrolled && 'bg-scroll'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={navbarLogo} alt="" />
                    </a>
                    <button className="navbarToggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="togglerIcon">
                            <FaBars />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 nav nav-pills">
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
                            {/* <li className="nav-item">
                                <a href="#home" className="nav-link" data-to-scrollspy-id="home">
                                    home
                                    <span id='line'></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#service" className="nav-link" data-to-scrollspy-id="service">
                                    service
                                    <span id='line'></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link" data-to-scrollspy-id="portfolio">
                                    portfolio
                                    <span id='line'></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#skill" className="nav-link" data-to-scrollspy-id="skill">
                                    skill
                                    <span id='line'></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#testimonial" className="nav-link" data-to-scrollspy-id="testimonial">
                                    testimonial
                                    <span id='line'></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link" data-to-scrollspy-id="contact">
                                    contact
                                    <span id='line'></span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <nav id="navbar-example2" className={`navbar px-3 mb-3 px-5 ${scrolled && 'bg-scroll'}`}>
                <div className="navbarBrand">
                    <a className="navbar-brand" href="#">
                        <img src={navbarLogo} alt="" />
                    </a>

                    <button className="navbarToggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick}>
                        <span className="togglerIcon">
                            <FaBars />
                        </span>
                    </button>

                </div>

                <ul className="nav nav-pills gap-5" style={{ display: isOpen ? "flex" : "none" }}>
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
            </nav> */}






            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary rounded-2" tabIndex="0">
                <div id='home' className="homeDiv">
                    <img src={bannerImg2} alt="" className='homeImg' />
                    <h1>Home</h1>
                </div>
                <div id='service' className="section">
                    <h1>service</h1>
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