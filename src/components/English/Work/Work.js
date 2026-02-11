import "./work.scss";
import { useEffect } from "react";
import img_logo_coding from "../../../img/logo/work/coding.webp";
import img_logo_testing from "../../../img/logo/work/testing.webp";
import img_logo_api from "../../../img/logo/work/api.webp";

export default function WorkHistory () {

    //scroll to the top once open
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])  

    return (
        <section>
            <h1>Work</h1>
            <hr />
            <div className="work-history">
                <p>I am a <span style={{fontWeight: "bold", color: "#FF6661"}}>product-driven professional</span> focused on identifying business needs, aligning stakeholders, and translating complex requirements into <span style={{fontWeight: "bold", color: "#FF6661"}}>scalable IT solutions</span>. My approach combines analytical thinking with hands-on technical understanding to deliver efficient, <span style={{fontWeight: "bold", color: "#FF6661"}}>API-driven financial products</span>.</p>
                <ul></ul>
                <ul>
                    <li>
                        <h2>MARKETUP S.R.O.</h2>
                        <ul>
                            <li>
                                <div className="work-history-flip-box" id="background-color-work">
                                    <div className="work-history-flip-box__triangle" />
                                    <img src={img_logo_coding} className="pulse" alt="Coding" />                      
                                </div>
                                <div className="work-history-flip-box__back-site">
                                    <a 
                                        href="https://www.marketup.cz/en" 
                                        aria-label="Marketup s.r.o."
                                        rel="noopener noreferrer" 
                                        target="_blank" 
                                        >Go to website
                                    </a>   
                                </div>
                            </li>
                        </ul>
                        <h3>Junior Front-End<br/>Developer</h3> 
                        <p>Internship</p> 
                        <p>05/2022 - 01/2023</p>
                        <hr />
                        <ul>
                            <li>Developed <span style={{fontWeight: "bold", color: "#7A0400"}}>React.js components</span> for an order management platform</li>
                            <li>Implemented automated unit tests to reduce frontend defects</li>
                            <li>Customized <span style={{fontWeight: "bold", color: "#7A0400"}}>Material UI</span> components to enhance UX and consistency</li>
                            <li>Migrated styling from CSS to <span style={{fontWeight: "bold", color: "#7A0400"}}>SCSS</span> to improve maintainability and structure</li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack:</span> React.js, TypeScript, CSS<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>3</span>, SCSS, Bootstrap <span style={{fontFamily: '"Times New Roman", Times, serif'}}>5</span>, Git, GitLab, Webpack, Asana</p>
                    </li>
                    <li>
                        <h2>CLEARSTREAM S.R.O.</h2>
                        <ul>
                            <li>
                                <div className="work-history-flip-box" id="background-color-work">
                                    <div className="work-history-flip-box__triangle" />
                                    <img src={img_logo_testing} className="pulse" alt="Testing" />                      
                                </div>
                                <div className="work-history-flip-box__back-site">
                                    <a 
                                        href="https://www.clearstream.com/clearstream-en/" 
                                        aria-label="Clearstream s.r.o."
                                        rel="noopener noreferrer" 
                                        target="_blank" 
                                        >Go to website
                                    </a>   
                                </div>
                            </li>
                        </ul>
                        <h3>User Acceptance Testing<br/>Specialist</h3> 
                        <p>Full-time</p> 
                        <p>02/2023 - 12/2024</p>
                        <hr />
                        <ul>
                            <li>Analyzed user stories and validated alignment with collateral ops requirements</li>
                            <li>Executed Agile-based test cycles using Xray, ensuring transparent reporting</li>
                            <li>Simulated <span style={{fontWeight: "bold", color: "#7A0400"}}>SWIFT messages</span> and validated backend processes using <span style={{fontWeight: "bold", color: "#7A0400"}}>SQL</span> queries</li>
                            <li>Logged and tracked defects in <span style={{fontWeight: "bold", color: "#7A0400"}}>Jira</span>, collaborated closely with development teams</li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span>SQL, XML, Jira, Xray, Xact Web Portal application</p>
                    </li>
                    <li>
                        <h2>CLEARSTREAM S.R.O.</h2>
                        <ul>
                            <li>
                                <div className="work-history-flip-box" id="background-color-work">
                                    <div className="work-history-flip-box__triangle" />
                                    <img src={img_logo_api} className="pulse" alt="API" />                      
                                </div>
                                <div className="work-history-flip-box__back-site">
                                    <a 
                                        href="https://www.clearstream.com/clearstream-en/" 
                                        aria-label="Clearstream s.r.o."
                                        rel="noopener noreferrer" 
                                        target="_blank" 
                                        >Go to website
                                    </a>   
                                </div>
                            </li>
                        </ul>
                        <h3>Product Manager<br/>APIs and Data Standardization</h3> 
                        <p>Full-time</p> 
                        <p>01/2025 - present</p>
                        <hr />
                        <ul>
                            <li>Defining <span style={{fontWeight: "bold", color: "#7A0400"}}>product roadmaps</span> and leading client onboarding across API services</li>
                            <li>Designing and implementing a <span style={{fontWeight: "bold", color: "#7A0400"}}>client-facing platform</span> centralizing API documentation and technical resources</li>
                            <li>Managing <span style={{fontWeight: "bold", color: "#7A0400"}}>API data model updates</span> while preserving backward compatibility</li>
                            <li>Collaborating on API integration and <span style={{fontWeight: "bold", color: "#7A0400"}}>OpenAPI/Swagger documentation</span> for Eurobond digital issuance</li>
                            <li>Translating stakeholder needs into technical specifications and product features</li>
                            <li>Migrating legacy (HTML/JS + Java backend) to <span style={{fontWeight: "bold", color: "#7A0400"}}>React</span> to improve maintainability</li>
                        </ul>
                        <p><span style={{fontWeight: "bold", color: "#7A0400"}}>Tech Stack: </span>React.js, JavaScript, CSS<span style={{fontFamily: '"Times New Roman", Times, serif'}}>3</span>, OpenAPI, Swagger, XML, XSLT, GitHub, Jenkins, Jira</p>
                    </li>
                </ul>
                </div>
        </section>
    );
}