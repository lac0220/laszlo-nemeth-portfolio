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
                <p>I develop user-friendly and responsive web applications, translating concepts into maintainable, performance-driven solutions using <span style={{fontWeight: "bold", color: "#FF6661"}}>modern frontend technologies and structured design principles.</span></p>
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
                            <li>a home page with essential information</li>
                            <li>a menu page showcasing available offerings</li>
                            <li>a coffee selection page listing different types of coffee</li>
                            <li>an "Our Story" page with a reservation contact form</li>
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
                        <p>This mobile-friendly web application utilizes an API to generate <span style={{fontWeight: "bold", color: "#7A0400"}}>random and daily inspirational quotes</span>, offering users features such as:</p>
                        <ul>
                            <li>categorized quotes for easy browsing</li>
                            <li>alphabetical filtering of authors</li>
                            <li>keyword search to find specific quotes</li>
                            <li>contact form with email submission functionality</li>
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
                        <p>The <span style={{fontWeight: "bold", color: "#7A0400"}}>Random Jokes Generator</span> retrieves data from an API, providing users access to a jokes platform while simultaneously tracking the number of jokes read.</p>
                        <p><u>Technologies & Libraries Used:</u></p>
                        <ul>
                            <li>react-bootstrap - integrates the Bootstrap CSS framework</li>
                            <li>font-awesome - provides an extensive icon library and toolkit</li>
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
                            <li>react-router-dom - enables client-side routing</li>
                            <li>react-hook-form - handles form validation</li>
                            <li>react-bootstrap - integrates the Bootstrap CSS framework for styling</li>
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
                        <p>This mobile-friendly <span style={{fontWeight: "bold", color: "#7A0400"}}>web app is designed for a model and artist</span>, featuring a gallery and a blog section. The contact form is integrated with EmailJS, enabling messages to be sent directly to a Gmail address.</p>
                        <p><u>Technologies & Libraries Used:</u></p>
                        <ul>
                            <li>react-router-dom and hash-link - enables smooth client-side routing</li>
                            <li>react-alice-carousel - provides an interactive image slider</li>
                            <li>react-modal-image - supports image zoom functionality</li>
                            <li>react-hook-form - manages form validation</li>
                            <li>node-sass - compiles SCSS files into CSS for styling</li>
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
                        <p>This web application features two main pages: one that lists <span style={{fontWeight: "bold", color: "#7A0400"}}>all products from a MySQL database</span> and another that allows users to <span style={{fontWeight: "bold", color: "#7A0400"}}>add new products with a unique SKU</span> and details such as name, price, size, height, width, length, and weight. The database is hosted on<span style={{ fontFamily: '"Times New Roman", Times, serif' }}> 000</span>webhost and managed via phpMyAdmin.</p>
                        <p><u>Technologies & Libraries Used:</u></p>
                        <ul>
                            <li>react-router-dom - enables seamless client-side routing</li>
                            <li>react-hook-form - handles form validation</li>
                            <li>axios - facilitates HTTP requests for data fetching</li>
                            <li>mui/material - provides advanced UI components</li>
                            <li>node-sass - compiles SCSS files into CSS for styling</li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>React.js, SCSS, PHP, MySQL</span></p>
                    </li>
                </ul>
            </div>
        </section> 
    );
}