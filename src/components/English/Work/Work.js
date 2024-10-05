import "./work.scss";
import { useEffect } from "react";
import img_logo_coding from "../../../img/logo/work/coding.webp";
import img_logo_testing from "../../../img/logo/work/testing.webp";

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
                        <h3>JUNIOR FE DEVELOPER</h3> 
                        <p>Internship</p> 
                        <p><span style={{fontFamily: '"Times New Roman", Times, serif'}}>05/2022 - 01/2023</span></p>
                        <hr />
                        <ul>
                            <li><span>Assisted the software development team by <span style={{fontWeight: "bold"}}>building an internal order-processing software</span></span></li>
                            <li><span>Created and maintained <span style={{fontWeight: "bold"}}>front-end code in React.js </span> while collaborating on GitLab</span></li>
                            <li><span><span style={{fontWeight: "bold"}}>Customized user-facing components</span> with the <span style={{fontWeight: "bold"}}>MUI library</span> to meet operational needs</span></li>
                            <li><span>Adjusted proper visual hierarchy and alignment to<span style={{fontWeight: "bold"}}> optimize UI design</span></span></li>
                            <li><span><span style={{fontWeight: "bold"}}>Replaced CSS with SCSS</span> for advanced features</span></li>
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
                        <h3>UAT SPECIALIST</h3> 
                        <p>Full-time</p> 
                        <p><span style={{fontFamily: '"Times New Roman", Times, serif'}}>02/2023 - 12/2024</span></p>
                        <hr />
                        <ul>
                            <li><span><span style={{fontWeight: "bold"}}>Analysing</span> the requirements of <span style={{fontWeight: "bold"}}>specific user stories</span> in ECMS collateral management services</span></li>
                            <li><span><span style={{fontWeight: "bold"}}>Executing test cases</span> with an agile methodology approach</span></li>
                            <li><span>Simulating client behaviour in a BAT environment by <span style={{fontWeight: "bold"}}>sending SWIFT messages</span> and monitoring them with <span style={{fontWeight: "bold"}}>SQL in databases</span></span></li>
                            <li><span><span style={{fontWeight: "bold"}}>Documenting test results </span>and <span style={{fontWeight: "bold"}}>reporting defects</span> to developers <span style={{fontWeight: "bold"}}>via Jira tasks</span></span></li>
                            <li><span>Liaising frequently with Test Coordinators and regularly <span style={{fontWeight: "bold"}}>updating the testing status in Xray</span></span></li>
                        </ul>
                        <p><span style={{fontWeight: "bold"}}>Tech Stack: </span>SQL, XML, Jira, Xray, Xact Web Portal application</p>
                    </li>
                </ul>
                </div>
        </section>
    );
}