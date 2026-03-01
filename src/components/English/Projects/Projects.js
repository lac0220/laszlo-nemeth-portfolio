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
                                    <span className="projects-flip-box__badge">View Live Demo</span>
                                    <img src={img_logo_coffee} className="pulse" alt="Coffee shop" />
                                </div>
                                <div className="projects-flip-box__back-site">
                                    <a
                                        href="https://lac0220.github.io/hackaton-coffeeshop/index.html"
                                        aria-label="Coffee shop website"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >Open Demo
                                    </a>
                                    <i><FontAwesomeIcon icon={faArrowsUpDown} aria-label="Arrows up-down icon" /></i>
                                    <a
                                        href="https://github.com/lac0220/hackaton-coffeeshop"
                                        aria-label="GitHub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FontAwesomeIcon icon={faGithub} aria-label="GitHub icon" title="GitHub" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <h3>Bootcamp Hackathon</h3>
                        <hr />
                        <p>This responsive static website was developed for a coffee shop as part of a front-end development challenge. The project highlights <span style={{fontWeight: "bold", color: "#7A0400"}}>responsive layout</span> design, structured content organization, and <span style={{fontWeight: "bold", color: "#7A0400"}}>modern SCSS workflow</span>. The site includes:</p>
                        <ul>
                            <li>A home page with key business information</li>
                            <li>A menu page presenting available products</li>
                            <li>A coffee selection page detailing different coffee types</li>
                            <li>An “Our Story” page featuring a reservation contact form</li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>HTML<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span>, SCSS, Gulp.js</span></p>
                    </li>
                    <li>
                        <h2>LEGENDARY QUOTES</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box" id="background-color-quotes">
                                    <span className="projects-flip-box__badge">View Live Demo</span>
                                    <img src={img_logo_quotes} className="pulse" alt="Legendary Quotes" />
                                </div>
                                <div className="projects-flip-box__back-site">
                                    <a
                                        href="https://lac0220.github.io/finalproject-quotes/index.html"
                                        aria-label="Legendary Quotes website"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >Open Demo
                                    </a>
                                    <i><FontAwesomeIcon icon={faArrowsUpDown} aria-label="Arrows up-down icon" /></i>
                                    <a
                                        href="https://github.com/lac0220/finalproject-quotes"
                                        aria-label="GitHub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FontAwesomeIcon icon={faGithub} aria-label="GitHub icon" title="GitHub" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <h3>Bootcamp Final Project</h3>
                        <hr />
                        <p>This mobile-friendly web application integrates an external API to generate both random and daily inspirational quotes. The project focuses on <span style={{fontWeight: "bold", color: "#7A0400"}}>API handling, dynamic filtering</span>, and responsive front-end development. It provides multiple browsing and filtering features, including:</p>
                        <ul>
                            <li>Categorized quotes for structured navigation</li>
                            <li>Alphabetical author filtering</li>
                            <li>Keyword-based quote search</li>
                            <li>Contact form with email submission functionality</li>
                        </ul>
                        <p><span span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>HTML<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span>, SCSS, JavaScript, Gulp.js</span></p>
                    </li>
                    <li>
                        <h2>JOKES GENERATOR</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box" id="background-color-jokes">
                                    <span className="projects-flip-box__badge">View Live Demo</span>
                                    <img src={img_jokes} className="pulse" alt="Jokes generator" />
                                </div>
                                <div className="projects-flip-box__back-site">
                                    <a
                                        href="https://lac0220.github.io/joke-api"
                                        aria-label="Jokes Generator"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >Open Demo
                                    </a>
                                    <i><FontAwesomeIcon icon={faArrowsUpDown} aria-label="Arrows up-down icon" /></i>
                                    <a
                                        href="https://github.com/lac0220/joke-api"
                                        aria-label="GitHub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FontAwesomeIcon icon={faGithub} aria-label="GitHub icon" title="GitHub" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <h3>Freelancing</h3>
                        <hr />
                        <p>This interactive web application fetches data from a public jokes API to deliver random jokes to users. It includes a joke counter feature that tracks how many jokes have been viewed during the session. The project demonstrates <span style={{fontWeight: "bold", color: "#7A0400"}}>API consumption, state management, and interactive UI design</span>.</p>
                        <p><u>Libraries Used:</u></p>
                        <ul>
                            <li>React-Bootstrap - Responsive UI components</li>
                            <li>Font Awesome - Icon integration</li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>React.js, Bootstrap<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span></span></p>
                    </li>
                    <li>
                        <h2>WIKI SEARCH ENGINE</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box" id="background-color-wiki">
                                    <span className="projects-flip-box__badge">View Live Demo</span>
                                    <img src={img_wiki} className="pulse" alt="Wiki search engine" />
                                </div>
                                <div className="projects-flip-box__back-site">
                                    <a
                                        href="https://lac0220.github.io/wiki-search"
                                        aria-label="Wiki search engine"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >Open Demo
                                    </a>
                                    <i><FontAwesomeIcon icon={faArrowsUpDown} aria-label="Arrows up-down icon" /></i>
                                    <a
                                        href="https://github.com/lac0220/wiki-search"
                                        aria-label="GitHub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FontAwesomeIcon icon={faGithub} aria-label="GitHub icon" title="GitHub" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <h3>Freelancing</h3>
                        <hr />
                        <p>This search engine application integrates the Wikipedia API to fetch and display the top five search results based on user input, with an option to load additional results dynamically. Each result links directly to its corresponding Wikipedia page for deeper exploration. The project emphasizes <span style={{fontWeight: "bold", color: "#7A0400"}}>API integration, dynamic rendering, and clean user experience design</span>.</p>
                        <p><u>Libraries Used:</u></p>
                        <ul>
                            <li>react-router-dom - Client-side routing</li>
                            <li>react-hook-form - Form validation</li>
                            <li>React-Bootstrap - Responsive UI components</li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>React.js, Bootstrap<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span></span></p>
                    </li>
                    <li>
                        <h2>MODEL PORTFOLIO</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box" id="background-color-model">
                                    <span className="projects-flip-box__badge">View Live Demo</span>
                                    <img src={img_logo_model} className="pulse" alt="Model portfolio" />
                                </div>
                                <div className="projects-flip-box__back-site">
                                    <a
                                        href="https://lac0220.github.io/model-portfolio"
                                        aria-label="Model Portfolio"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >Open Demo
                                    </a>
                                    <i><FontAwesomeIcon icon={faArrowsUpDown} aria-label="Arrows up-down icon" /></i>
                                    <a
                                        href="https://github.com/lac0220/model-portfolio"
                                        aria-label="GitHub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FontAwesomeIcon icon={faGithub} aria-label="GitHub icon" title="GitHub" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <h3>Freelancing</h3>
                        <hr />
                        <p>This mobile-responsive portfolio website was built for a model and artist, featuring a dynamic gallery and a blog section. The application focuses on <span style={{fontWeight: "bold", color: "#7A0400"}}>visual presentation, smooth navigation, and user interaction</span>. The contact form is integrated with EmailJS, allowing visitors to send messages directly to a Gmail inbox without requiring a backend server.</p>
                        <p><u>Libraries Used:</u></p>
                        <ul>
                            <li>react-router-dom & react-router-hash-link - Smooth client-side navigation</li>
                            <li>react-alice-carousel - Interactive image carousel</li>
                            <li>react-modal-image - Image zoom functionality</li>
                            <li>react-hook-form - Form validation and handling</li>
                            <li>SCSS - Modular and responsive styling</li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>React.js, SCSS</span></p>
                    </li>
                    <li>
                        <h2>E-COMMERCE</h2>
                        <ul>
                            <li>
                                <div className="projects-flip-box" id="background-color-e-commerce">
                                    <span className="projects-flip-box__badge">View Live Demo</span>
                                    <img src={img_e_commerce} className="pulse" alt="E-commerce" />
                                </div>
                                <div className="projects-flip-box__back-site">
                                    <a
                                        href="https://lac0220.github.io/e-commerce"
                                        aria-label="E-commerce"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >Open Demo
                                    </a>
                                    <i><FontAwesomeIcon icon={faArrowsUpDown} aria-label="Arrows up-down icon" /></i>
                                    <a
                                        href="https://github.com/lac0220/e-commerce"
                                        aria-label="GitHub"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FontAwesomeIcon icon={faGithub} aria-label="GitHub icon" title="GitHub" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <h3>Freelancing</h3>
                        <hr />
                        <p>This web application is a fully functional<span style={{fontWeight: "bold", color: "#7A0400"}}> e-commerce product management system</span> built with React. It features a product listing page that <span style={{fontWeight: "bold", color: "#7A0400"}}>dynamically retrieves data from a cloud database</span>, and a product creation page that allows users to add new products with a unique SKU and detailed attributes (name, price, size, weight, dimensions). The app includes form validation with conditional fields based on product type and responsive design optimized for both desktop and mobile devices. <span style={{fontWeight: "bold", color: "#7A0400"}}>The backend is powered by Supabase</span> and data operations (create, read, delete) are handled securely using its client library.</p>
                        <p><u>Libraries Used:</u></p>
                        <ul>
                            <li>react-router-dom - Client-side routing</li>
                            <li>react-hook-form - Form validation and handling</li>
                            <li>@mui/material - UI component library</li>
                            <li>SCSS - Modular and responsive styling</li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span><span>React.js, SCSS, Supabase (PostgreSQL + RESTful API)</span></p>
                    </li>
                </ul>
            </div>
        </section> 
    );
}