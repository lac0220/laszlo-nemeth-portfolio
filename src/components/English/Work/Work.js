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
                <p>I have always been a <span style={{fontWeight: "bold", color: "#FF6661"}}>service-driven professional</span> committed to exceptional customer service and outstanding delivery, regardless of my field of work. My passion lies in identifying business needs and analyzing requirements<span style={{fontWeight: "bold", color: "#FF6661"}}> to develop innovative IT solutions.</span></p>
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
                        <h3>Junior Front-End</h3> 
                        <h3>Developer</h3> 
                        <p>Internship</p> 
                        <p><span style={{fontFamily: '"Times New Roman", Times, serif'}}>05/2022 - 01/2023</span></p>
                        <hr />
                        <ul>
                            <li><span>Supported the <span style={{fontWeight: "bold"}}>Front-End development team </span>in building an order management software</span></li>
                            <li><span>Contributed to <span style={{fontWeight: "bold"}}>React.js development </span>and transitioned CSS to SCSS for new features</span></li>
                            <li><span>Conducted<span style={{fontWeight: "bold"}}> automated unit testing </span>to detect and resolve bugs</span></li>
                            <li><span><span style={{fontWeight: "bold"}}>Customized user-facing components </span>using the MUI library to enhance functionality</span></li>
                            <li><span>Refined visual hierarchy and alignment to <span style={{fontWeight: "bold"}}>optimize UI design</span></span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span>React.js, TypeScript, CSS<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>3</span>, SCSS, Bootstrap <span style={{fontFamily: '"Times New Roman", Times, serif'}}>5</span>, Git, GitLab, Webpack, Asana</p>
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
                        <h3>User Acceptance Testing</h3> 
                        <h3>Specialist</h3> 
                        <p>Full-time</p> 
                        <p><span style={{fontFamily: '"Times New Roman", Times, serif'}}>02/2023 - 12/2024</span></p>
                        <hr />
                        <ul>
                            <li><span><span style={{fontWeight: "bold"}}>Analysed user story</span> requirements for ECMS collateral management services</span></li>
                            <li><span>Executed<span style={{fontWeight: "bold"}}> test cases </span>using an agile testing methodology</span></li>
                            <li><span>Simulated<span style={{fontWeight: "bold"}}> SWIFT messages </span>monitored database transactions with <span style={{fontWeight: "bold"}}>SQL</span></span></li>
                            <li><span><span style={{fontWeight: "bold"}}>Documented test results </span>and reported defects to developers via Jira</span></li>
                            <li><span>Coordinated with test managers and maintained<span style={{fontWeight: "bold"}}> test case status in Xray</span></span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span>SQL, XML, Jira, Xray, Xact Web Portal application</p>
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
                        <h3>Product Manager</h3> 
                        <h3>API & Pre-Issuance Eurobonds</h3> 
                        <p>Full-time</p> 
                        <p><span style={{fontFamily: '"Times New Roman", Times, serif'}}>01/2025 - present</span></p>
                        <hr />
                        <ul></ul>
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span>Jira, Jenkins, HTML<span style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</span>, CSS<span style={{fontFamily: '"Times New Roman", Times, serif'}}>3</span>, JavaScript, XML, XSLT, GitHub, GitHub Copilot, Visual Studio Code, D<span style={{fontFamily: '"Times New Roman", Times, serif'}}>7</span> Navigator</p>
                    </li>
                </ul>
                </div>
        </section>
    );
}