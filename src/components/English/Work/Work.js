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
                <p>I have always been a <span style={{fontWeight: "bold", color: "#FF6661"}}>service-oriented professional</span> devoted to excellent customer service and outstanding service delivery, regardless of the area of my professional activity. Generally speaking, I am passionate about identifying business needs and analysing requirements<span style={{fontWeight: "bold", color: "#FF6661"}}> to provide innovative IT solutions.</span></p>
                <ul></ul>
                <ul>
                    <li>
                        <h2>MARKETUP S.R.O.</h2>
                        <ul>
                            <li>
                                <div className="work-history-flip-box pulse" id="background-color-work">
                                    <div className="work-history-flip-box__triangle" />
                                    <img src={img_logo_coding} alt="Coding" />                      
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
                            <li><span><span style={{fontWeight: "bold"}}>Assisted the Front-End development team </span>by building an order management software</span></li>
                            <li><span>Contributed to <span style={{fontWeight: "bold"}}>coding in React.js </span>and replaced CSS with SCSS for new features</span></li>
                            <li><span><span style={{fontWeight: "bold"}}>Performed automated unit testing </span>to identify and fix bugs</span></li>
                            <li><span><span style={{fontWeight: "bold"}}>Customized user-facing components </span>with the MUI library to meet operational needs</span></li>
                            <li><span>Adjusted proper visual hierarchy and alignment to <span style={{fontWeight: "bold"}}>optimize UI design</span></span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span>React.js, TypeScript, CSS, SCSS, Bootstrap <span style={{fontFamily: '"Times New Roman", Times, serif'}}>5</span>, Git, GitLab, Webpack, Asana</p>
                    </li>
                    <li>
                        <h2>CLEARSTREAM S.R.O.</h2>
                        <ul>
                            <li>
                                <div className="work-history-flip-box pulse" id="background-color-work">
                                    <div className="work-history-flip-box__triangle" />
                                    <img src={img_logo_testing} alt="Testing" />                      
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
                            <li><span><span style={{fontWeight: "bold"}}>Analysed </span>the requirements of <span style={{fontWeight: "bold"}}>user stories </span>in ECMS collateral management services</span></li>
                            <li><span><span style={{fontWeight: "bold"}}>Executed test cases </span>with an agile methodology approach</span></li>
                            <li><span><span style={{fontWeight: "bold"}}>Simulated user’s SWIFT messages </span>and monitored them with SQL in databases</span></li>
                            <li><span><span style={{fontWeight: "bold"}}>Documented test results </span>and <span style={{fontWeight: "bold"}}>reported defects </span>to developers in Jira</span></li>
                            <li><span>Liaised with test coordinators and regularly <span style={{fontWeight: "bold"}}>updated the test case status in Xray </span></span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span>SQL, XML, Jira, Xray, Xact Web Portal application</p>
                    </li>
                    <li>
                        <h2>CLEARSTREAM S.R.O.</h2>
                        <ul>
                            <li>
                                <div className="work-history-flip-box pulse" id="background-color-work">
                                    <div className="work-history-flip-box__triangle" />
                                    <img src={img_logo_api} alt="API" />                      
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
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span>Jira, Jenkins, HTML, JavaScript, CSS<span style={{fontFamily: '"Times New Roman", Times, serif'}}>3</span>, Visual Studio Code, XML, XSLT, GitHub, GitHub Copilot, D<span style={{fontFamily: '"Times New Roman", Times, serif'}}>7</span> Navigator</p>
                    </li>
                </ul>
                </div>
        </section>
    );
}