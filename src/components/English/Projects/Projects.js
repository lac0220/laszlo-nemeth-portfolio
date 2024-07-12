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
                <p>My intention is to develop<span style={{fontWeight: "bold", color: "#FF6661"}}> user-friendly websites and web applications</span> with a responsive design. I enjoy turning ideas into real things, <span style={{fontWeight: "bold", color: "#FF6661"}}> adding motion to elements,</span> and maintaining high discoverability for an <span style={{fontWeight: "bold", color: "#FF6661"}}>enjoyable user experience</span> while using various web technologies and software development tools:</p>
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
                                <div className="projects-flip-box pulse" id="background-color-coffee">
                                    <div className="projects-flip-box__triangle" />
                                    <img src={img_logo_coffee} alt="Coffee shop" />
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
                        <h3>BOOTCAMP HACKATHON</h3>
                        <hr />
                        <p>The challenge was to design a<span style={{fontWeight: "bold"}}> responsive, static website for a coffee shop</span>. It contains:</p>
                        <ul>
                            <li><span>a home page with some basic information</span></li>
                            <li><span>a menu page</span></li>
                            <li><span>types of listed coffees page</span></li>
                            <li><span>our story page with a reservation contact form</span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span><span>HTML<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span>, SCSS, Gulp.js</span></p>
                    </li>
                    <li>
                        <h2>LEGENDARY QUOTES</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box pulse" id="background-color-quotes">
                                    <div className="projects-flip-box__triangle" />
                                    <img src={img_logo_quotes} alt="Legendary Quotes" />
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
                        <h3>BOOTCAMP FINAL PROJECT</h3>
                        <hr />
                        <p>The mobile-friendly <span style={{fontWeight: "bold"}}>web application uses an API to generate</span> random and daily inspirational <span style={{fontWeight: "bold"}}>quotes</span>. It gives the user features like:</p>
                        <ul>
                            <li><span>sorted quote categories</span></li>
                            <li><span>alphabetical filtering of authors</span></li>
                            <li><span>text-keyword searching between quotes</span></li>
                            <li><span>contact form submission to an email address</span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span><span>HTML<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span>, SCSS, JavaScript, Gulp.js</span></p>
                    </li>
                    <li>
                        <h2>JOKES GENERATOR</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box pulse" id="background-color-jokes">
                                    <div className="projects-flip-box__triangle" />
                                    <img src={img_jokes} alt="Jokes generator" />
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
                        <h3>FREELANCING</h3>
                        <hr />
                        <p>Random Jokes Generator<span style={{fontWeight: "bold"}}> fetches API data</span> from an URL and <span style={{fontWeight: "bold"}}>gives access to the Jokes platform</span>. In the meantime, the web application also keeps counting the number of jokes read.</p>
                        <p><u><span style={{fontWeight: "bold"}}> Used third-party NPM packages:</span></u></p>
                        <ul>
                            <li><span>react-bootstrap: for adding the Bootstrap CSS framework</span></li>
                            <li><span>font-awesome: for the icon library and toolkit</span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span><span>React.js, Bootstrap<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span></span></p>
                    </li>
                    <li>
                        <h2>WIKI SEARCH ENGINE</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box pulse" id="background-color-wiki">
                                    <div className="projects-flip-box__triangle" />
                                    <img src={img_wiki} alt="Wiki search engine" />
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
                        <h3>FREELANCING</h3>
                        <hr />
                        <p>The<span style={{fontWeight: "bold"}}> search engine uses the Wikipedia API,</span> which returns the first five listed hits and shows the rest on request. The hits forward us to the specific Wikipedia entry, the so-called wiki page.</p>
                        <p><u><span style={{fontWeight: "bold"}}> Used third-party NPM packages:</span></u></p>
                        <ul>
                            <li><span>react-router-dom: for client-side routing</span></li>
                            <li><span>react-hook-form for form validation</span></li>
                            <li><span>react-bootstrap: for adding the Bootstrap CSS framework</span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span><span>React.js, Bootstrap<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span></span></p>
                    </li>
                    <li>
                        <h2>MODEL PORTFOLIO</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box pulse" id="background-color-model">
                                    <div className="projects-flip-box__triangle" />
                                    <img src={img_logo_model} alt="Model portfolio" />
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
                        <h3>FREELANCING</h3>
                        <hr />
                        <p>The web app is designed to be<span style={{fontWeight: "bold"}}> mobile-friendly for a model and artist, </span>with a gallery and a blog section. The contact form is <span style={{fontWeight: "bold"}}>set up with an EmailsJS account</span> for sending messages to a Gmail email address.</p>
                        <p><u><span style={{fontWeight: "bold"}}> Used third-party NPM packages:</span></u></p>
                        <ul>
                            <li><span>react-router-dom and hash-link for client-side routing</span></li>
                            <li><span>react-alice-carousel for sliding images</span></li>
                            <li><span>react-modal-image with zoom option</span></li>
                            <li><span>react-hook-form for form validation</span></li>
                            <li><span>node-sass for compiling SCSS files to CSS</span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span><span>React.js, SCSS</span></p>
                    </li>
                    <li>
                        <h2>E-COMMERCE</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box pulse" id="background-color-e-commerce">
                                    <div className="projects-flip-box__triangle" />
                                    <img src={img_e_commerce} alt="E-commerce" />
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
                        <h3>FREELANCING</h3>
                        <hr />
                        <p>The web application contains two pages listing all<span style={{fontWeight: "bold"}}> products from a MySQL database</span> and <span style={{fontWeight: "bold"}}>adding a product with a unique SKU</span> + additional details like name, price, size, height, width, length, and weight. These products can also be deleted by checking the box. The database is <span style={{fontWeight: "bold"}}>hosted on<span style={{ fontFamily: '"Times New Roman", Times, serif' }}> 000</span>webhost and managed with phpMyAdmin</span>.</p>
                        <p><u><span style={{fontWeight: "bold"}}> Used third-party NPM packages:</span></u></p>
                        <ul>
                            <li><span>react-router-dom for client-side routing</span></li>
                            <li><span>react-hook-form for form validation</span></li>
                            <li><span>axios for creating HTTP requests</span></li>
                            <li><span>mui/material for advanced UI elements</span></li>
                            <li><span>node-sass for compiling SCSS files to CSS</span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span><span>React.js, SCSS, PHP, MySQL</span></p>
                    </li>
                </ul>
            </div>
        </section> 
    );
}