import navbarLogo from '../assets/navbarLogo.png'
import bannerImg2 from '../assets/bannerImg2.svg'

export default function Navbar() {
    return (
        <>
            <nav id="navbar-example2" className="navbar px-3 mb-3 px-5">
                <a className="navbar-brand" href="#">
                    <img src={navbarLogo} alt="" />
                </a>
                <ul className="nav nav-pills gap-4">
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
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary rounded-2" tabIndex="0">
                <div id='home' className="section homeDiv">
                    <img src={bannerImg2} alt="" className='animate__animated animate__fadeInRight'/>
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