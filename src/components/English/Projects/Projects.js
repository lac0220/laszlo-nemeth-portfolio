import "./projects.scss";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faSass, faBootstrap, faJs, faReact, faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import img_logo_coffee from "../../../img/logo/projects/logo_coffee.svg";
import img_logo_quotes from "../../../img/logo/projects/logo_quotes.webp";
import img_jokes from "../../../img/logo/projects/jokes.webp";
import img_wiki from "../../../img/logo/projects/wiki.webp";
import img_logo_model from "../../../img/logo/projects/logo_model.webp";
import img_e_commerce from "../../../img/logo/projects/e-commerce.webp";

export default function Projects () {
    
    //scroll to the top once open
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) 

    return (
        <section>
            <h1>Projects</h1>
            <hr />
            <div className="projects"> 
                <p>I strive to create<span style={{fontWeight: "bold", color: "#FF6661"}}> user-friendly websites and web applications</span> with responsive design. I enjoy transforming ideas into reality, <span style={{fontWeight: "bold", color: "#FF6661"}}> adding dynamic elements</span>, and ensuring high discoverability for an <span style={{fontWeight: "bold", color: "#FF6661"}}>engaging user experience</span> using a range of web technologies and development tools:</p>
                <ul>
                    <li><i><FontAwesomeIcon icon={faHtml5} aria-label="HTML5 icon" title="HTML5" /></i></li>
                    <li><i><FontAwesomeIcon icon={faSass} aria-label="SCSS icon" title="SCSS" /></i></li>
                    <li><i><FontAwesomeIcon icon={faBootstrap} aria-label="Bootstrap icon" title="Bootstrap" /></i></li>
                    <li><i><FontAwesomeIcon icon={faJs} aria-label="Javascript icon" title="Javascript" /></i></li>
                    <li><i><FontAwesomeIcon icon={faReact} aria-label="React.js icon" title="React.js" /></i></li>
                    <li><i><FontAwesomeIcon icon={faGit} aria-label="Git icon" title="Git" /></i></li>
                    <li><i><FontAwesomeIcon icon={faGithub} aria-label="Github icon" title="Github" /></i></li>
                    <li><i><FontAwesomeIcon icon={faDatabase} aria-label="SQL icon" title="SQL" /></i></li>
                </ul>
                <ul>
                    <li>
                        <h2>GENERIC HIPSTER COFFEE</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box" id="background-color-coffee">
                                    <div className="projects-flip-box__triangle" />
                                    <img src={img_logo_coffee} className="pulse" alt="Coffee shop" />
                                </div>
                                <div className="projects-flip-box__back-site">
                                    <a
                                        href="https://lac0220.github.io/hackaton-coffeeshop/index.html"
                                        aria-label="Coffee shop website"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >Go to website
                                    </a>
                                    <i><FontAwesomeIcon icon={faArrowsUpDown} aria-label="Arrows up-down icon" /></i>
                                    <a
                                        href="https://github.com/lac0220/hackaton-coffeeshop"
                                        aria-label="GitHub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FontAwesomeIcon icon={faGithub} title="Check the code on GitHub" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <h3>Bootcamp Hackathon</h3>
                        <hr />
                        <p>The challenge was to to create a <span style={{fontWeight: "bold", color: "#7A0400"}}>responsive, static website</span> for a coffee shop, featuring:</p>
                        <ul>
                            <li><span>a home page with essential information</span></li>
                            <li><span>a menu page showcasing available offerings</span></li>
                            <li><span>a coffee selection page listing different types of coffee</span></li>
                            <li><span>an "Our Story" page with a reservation contact form</span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>HTML<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span>, SCSS, Gulp.js</span></p>
                    </li>
                    <li>
                        <h2>LEGENDARY QUOTES</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box" id="background-color-quotes">
                                    <div className="projects-flip-box__triangle" />
                                    <img src={img_logo_quotes} className="pulse" alt="Legendary Quotes" />
                                </div>
                                <div className="projects-flip-box__back-site">
                                    <a
                                        href="https://lac0220.github.io/finalproject-quotes/index.html"
                                        aria-label="Legendary Quotes website"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >Go to website
                                    </a>
                                    <i><FontAwesomeIcon icon={faArrowsUpDown} aria-label="Arrows up-down icon" /></i>
                                    <a
                                        href="https://github.com/lac0220/finalproject-quotes"
                                        aria-label="GitHub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FontAwesomeIcon icon={faGithub} aria-label="GitHub icon" title="Check the code on GitHub" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <h3>Bootcamp Final Project</h3>
                        <hr />
                        <p>This mobile-friendly <span style={{fontWeight: "bold", color: "#7A0400"}}>web application utilizes an API</span> to generate random and daily inspirational quotes, offering users features such as:</p>
                        <ul>
                            <li><span>categorized quotes for easy browsing</span></li>
                            <li><span>alphabetical filtering of authors</span></li>
                            <li><span>keyword search to find specific quotes</span></li>
                            <li><span>contact form with email submission functionality</span></li>
                        </ul>
                        <p><span span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>HTML<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span>, SCSS, JavaScript, Gulp.js</span></p>
                    </li>
                    <li>
                        <h2>JOKES GENERATOR</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box" id="background-color-jokes">
                                    <div className="projects-flip-box__triangle" />
                                    <img src={img_jokes} className="pulse" alt="Jokes generator" />
                                </div>
                                <div className="projects-flip-box__back-site">
                                    <a
                                        href="https://lac0220.github.io/joke-api"
                                        aria-label="Jokes Generator"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >Go to website
                                    </a>
                                    <i><FontAwesomeIcon icon={faArrowsUpDown} aria-label="Arrows up-down icon" /></i>
                                    <a
                                        href="https://github.com/lac0220/joke-api"
                                        aria-label="GitHub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FontAwesomeIcon icon={faGithub} aria-label="GitHub icon" title="Check the code on GitHub" />
                                        </a>
                                </div>
                            </li>
                        </ul>
                        <h3>Freelancing</h3>
                        <hr />
                        <p>The Random Jokes Generator <span style={{fontWeight: "bold", color: "#7A0400"}}>retrieves data from an API</span>, providing users access to a jokes platform while simultaneously tracking the number of jokes read.</p>
                        <p><u>Technologies & Libraries Used:</u></p>
                        <ul>
                            <li><span>react-bootstrap - integrates the Bootstrap CSS framework</span></li>
                            <li><span>font-awesome - provides an extensive icon library and toolkit</span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>React.js, Bootstrap<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span></span></p>
                    </li>
                    <li>
                        <h2>WIKI SEARCH ENGINE</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box" id="background-color-wiki">
                                    <div className="projects-flip-box__triangle" />
                                    <img src={img_wiki} className="pulse" alt="Wiki search engine" />
                                </div>
                                <div className="projects-flip-box__back-site">
                                    <a
                                        href="https://lac0220.github.io/wiki-search"
                                        aria-label="Wiki search engine"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >Go to website
                                    </a>
                                    <i><FontAwesomeIcon icon={faArrowsUpDown} aria-label="Arrows up-down icon" /></i>
                                    <a
                                        href="https://github.com/lac0220/wiki-search"
                                        aria-label="GitHub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FontAwesomeIcon icon={faGithub} aria-label="GitHub icon" title="Check the code on GitHub" />
                                        </a>
                                </div>
                            </li>
                        </ul>
                        <h3>Freelancing</h3>
                        <hr />
                        <p>This <span style={{fontWeight: "bold", color: "#7A0400"}}>search engine utilizes the Wikipedia API </span>to fetch the top five search results initially, with the option to load more on request. Each result links directly to its corresponding Wikipedia entry (wiki page) for further exploration.</p>
                        <p><u>Technologies & Libraries Used:</u></p>
                        <ul>
                            <li><span>react-router-dom - enables client-side routing</span></li>
                            <li><span>react-hook-form - handles form validation</span></li>
                            <li><span>react-bootstrap - integrates the Bootstrap CSS framework for styling</span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>React.js, Bootstrap<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span></span></p>
                    </li>
                    <li>
                        <h2>MODEL PORTFOLIO</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box" id="background-color-model">
                                    <div className="projects-flip-box__triangle" />
                                    <img src={img_logo_model} className="pulse" alt="Model portfolio" />
                                </div>
                                <div className="projects-flip-box__back-site">
                                    <a
                                        href="https://lac0220.github.io/model-portfolio"
                                        aria-label="Model Portfolio"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >Go to website
                                    </a>
                                    <i><FontAwesomeIcon icon={faArrowsUpDown} aria-label="Arrows up-down icon" /></i>
                                    <a
                                        href="https://github.com/lac0220/model-portfolio"
                                        aria-label="GitHub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FontAwesomeIcon icon={faGithub} aria-label="GitHub icon" title="Check the code on GitHub" />
                                        </a>
                                </div>
                            </li>
                        </ul>
                        <h3>Freelancing</h3>
                        <hr />
                        <p>This mobile-friendly web app is <span style={{fontWeight: "bold", color: "#7A0400"}}>designed for a model and artist</span>, featuring a gallery and a blog section. The contact form is integrated <span style={{fontWeight: "bold", color: "#7A0400"}}>with EmailJS</span>, enabling messages to be sent directly to a Gmail address.</p>
                        <p><u>Technologies & Libraries Used:</u></p>
                        <ul>
                            <li><span>react-router-dom and hash-link - enables smooth client-side routing</span></li>
                            <li><span>react-alice-carousel - provides an interactive image slider</span></li>
                            <li><span>react-modal-image - supports image zoom functionality</span></li>
                            <li><span>react-hook-form - manages form validation</span></li>
                            <li><span>node-sass - compiles SCSS files into CSS for styling</span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>React.js, SCSS</span></p>
                    </li>
                    <li>
                        <h2>E-COMMERCE</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box" id="background-color-e-commerce">
                                    <div className="projects-flip-box__triangle" />
                                    <img src={img_e_commerce} className="pulse" alt="E-commerce" />
                                </div>
                                <div className="projects-flip-box__back-site">
                                    <a
                                        href="https://lac0220.github.io/e-commerce"
                                        aria-label="E-commerce"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >Go to website
                                    </a>
                                    <i><FontAwesomeIcon icon={faArrowsUpDown} aria-label="Arrows up-down icon" /></i>
                                    <a
                                        href="https://github.com/lac0220/e-commerce"
                                        aria-label="GitHub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FontAwesomeIcon icon={faGithub} aria-label="GitHub icon" title="Check the code on GitHub" />
                                        </a>
                                </div>
                            </li>
                        </ul>
                        <h3>Freelancing</h3>
                        <hr />
                        <p>This web application features two main pages: one that lists all <span style={{fontWeight: "bold", color: "#7A0400"}}>products from a MySQL database</span> and another that allows <span style={{fontWeight: "bold", color: "#7A0400"}}>users to add new products</span> with a unique SKU and details such as name, price, size, height, width, length, and weight. The database is <span style={{fontWeight: "bold", color: "#7A0400"}}>hosted on<span style={{ fontFamily: '"Times New Roman", Times, serif' }}> 000</span>webhost</span> and managed via phpMyAdmin.</p>
                        <p><u>Technologies & Libraries Used:</u></p>
                        <ul>
                            <li><span>react-router-dom - enables seamless client-side routing</span></li>
                            <li><span>react-hook-form - handles form validation</span></li>
                            <li><span>axios - facilitates HTTP requests for data fetching</span></li>
                            <li><span>mui/material - provides advanced UI components</span></li>
                            <li><span>node-sass - compiles SCSS files into CSS for styling</span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>React.js, SCSS, PHP, MySQL</span></p>
                    </li>
                </ul>
            </div>
        </section> 
    );
}