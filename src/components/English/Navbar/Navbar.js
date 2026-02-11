import "./navbar.scss";
import Hamburger from "./HamburgerMenu.js";
import Language from "./LanguageLogo.js";
import { useState } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../img/logo/logo.webp";

export default function Navbar() {    

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    //navbar removed for message page
    const { pathname } = useLocation();
    if (pathname === "/laszlo-nemeth-portfolio/message")
    return null;

    return (
        <nav>
            <Language />
            <ul>
                <li>
                    <div className="hamburger" onClick={handleToggle}><Hamburger isOpen={navbarOpen}/></div>
                </li>
                <li className="logo"><Link to="/laszlo-nemeth-portfolio" aria-label="Home page"><img src={logo} alt="Logo" /></Link></li>
                <li>
                    <h3>Laszlo Nemeth</h3>
                    <hr/>
                    <p>Product Manager</p>
                    <FontAwesomeIcon icon={faCode} color="#FF0700" aria-label="Code icon" />
                    <p>FE Developer</p>
                </li>
            </ul>
            <ul className={`${navbarOpen ? " showMenu" : ""}`}>
                <li>
                    <h3>Laszlo Nemeth</h3>
                    <p>Product Manager <FontAwesomeIcon icon={faCode} color="#FF0700" aria-label="Code icon" /> FE Developer</p>
                </li>
                <li><hr /></li>
                <li><NavLink to="/laszlo-nemeth-portfolio" onClick={() => closeMenu()} aria-label="Home page">Home</NavLink></li>
                <li><NavLink to="/laszlo-nemeth-portfolio/projects" onClick={() => closeMenu()} aria-label="Projects page">Projects</NavLink></li>
                <li><NavLink to="/laszlo-nemeth-portfolio/work" onClick={() => closeMenu()} aria-label="Work page">Work</NavLink></li>
                <li><NavLink to="/laszlo-nemeth-portfolio/about" onClick={() => closeMenu()} aria-label="About page">About</NavLink></li>
                <li><NavLink to="/laszlo-nemeth-portfolio/contact" onClick={() => closeMenu()} aria-label="Contact page">Contact</NavLink></li>
                <li>
                    <a
                        href={require("../../../img/cv/Laszlo_Nemeth_Resume.pdf")} 
                        aria-label="Resume"
                        rel="noopener noreferrer"
                        download="Laszlo Nemeth resume"
                        target="_blank"
                        >Resume
                    </a>
                </li>
                <li><hr /></li>
                <li>
                    <a 
                        href="https://www.linkedin.com/in/nemeth0220"
                        aria-label="Linkedin"
                        rel="noopener noreferrer"
                        target="_blank"
                        ><FontAwesomeIcon icon={faLinkedin} aria-label="Linkedin icon" title="Visit me on Linkedin" />
                    </a>
                    <a
                        href="https://github.com/lac0220"
                        aria-label="GitHub"
                        rel="noopener noreferrer"
                        target="_blank"
                        ><FontAwesomeIcon icon={faGithub} aria-label="GitHub icon" title="Visit me on GitHub" />
                    </a>
                </li> 
                <li>
                    <p>Copyright ©</p>
                    <p>Laszlo Nemeth<span style={{ fontFamily: '"Times New Roman", Times, serif' }}> 2026</span></p>
                </li>
            </ul>
        </nav>        
    );
}