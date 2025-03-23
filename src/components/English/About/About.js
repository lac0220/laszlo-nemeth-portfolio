import "./about.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import img_contact from "../../../img/profile.webp";

export default function About () {

    //scroll to the top once open
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []) 
     
    return (
        <section>
            <h1>About</h1>
            <hr />
            <div className="about">
                <div className="about__photo">
                    <img src={img_contact} width={300} height={300} alt="Laszlo Nemeth" />
                </div>
                <p>My IT journey began at <span style={{fontWeight: "bold", color: "#FF6661"}}>Hewlett-Packard</span> in Ireland, where I worked as <span style={{fontWeight: "bold", color: "#FF6661"}}>German Technical Support Analyst</span>, providing first-line support for a wide range of hardware and software. Afterward, I spent several years in taxation, collaborating with software developers to implement automated tax services. However, my passion for IT eventually led me back to the tech field.</p> 
                <p>In <span style={{fontFamily: '"Times New Roman", Times, serif'}} >2021</span>, I completed an intensive <span style={{fontWeight: "bold", color: "#FF6661"}}><span style={{fontFamily: '"Times New Roman", Times, serif'}} >12</span>-week full-stack web development course</span>, gaining experience with widely used programming languages and frameworks such as JavaScript, PHP, and React.js. I was particularly drawn to UI design and the code behind it, which led me to <span style={{fontWeight: "bold", color: "#FF6661"}}>specialize in front-end development</span>, where I found a strong affinity for React.js and its UI-driven layouts.</p>
                <p>Shortly after completing my training,  I landed my first internship as a <span style={{fontWeight: "bold", color: "#FF6661"}}>Junior Front-End Developer</span>, supporting a software development team in building and hosting internal order management software on Google Cloud Platform for a digital marketing company. My contributions included <span style={{fontWeight: "bold", color: "#FF6661"}}> coding in React.js</span>, performing automated unit testing to detect and fix bugs, <span style={{fontWeight: "bold", color: "#FF6661"}}>optimizing UI design</span>, and <span style={{fontWeight: "bold", color: "#FF6661"}}>customizing user-facing components</span> to meet operational needs.</p> 
                <p>Seeking to broaden my expertise, I transitioned into the financial services sector as a <span style={{fontWeight: "bold", color: "#FF6661"}}> User Acceptance Testing Specialist</span>. In this role, I tested user stories in ECMS collateral management services, executed test cases in a <span style={{fontWeight: "bold", color: "#FF6661"}}>UAT environment using agile methodologies</span>, and simulated user behavior by sending SWIFT messages and monitoring them in databases via SQL.</p>
                <p>Most recently, I joined the <span style={{fontWeight: "bold", color: "#FF6661"}}>Product Management team</span> in the <span style={{fontWeight: "bold", color: "#FF6661"}}>API & Pre-Issuance Eurobonds</span> department, where I contribute to <span style={{fontWeight: "bold", color: "#FF6661"}}>enhancing digital securities issuance services.</span></p>
                <p><span style={{fontWeight: "bold"}}>I am always eager to expand my IT skill set and take on challenging projects, making me open to discussions and collaborations in innovative, tech-driven environments</span></p>
                <ul> 
                    <li>
                        <i><FontAwesomeIcon icon={faAnglesDown}/></i>
                        <Link to="/laszlo-nemeth-portfolio/contact" aria-label="Contact page">
                            MESSAGE ME
                        </Link>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faAnglesDown}/></i>
                        <a 
                            href={require("../../../img/cv/Laszlo_Nemeth_Resume.pdf")} 
                            aria-label="Resume"
                            rel="noopener noreferrer"
                            download="Laszlo Nemeth resume"
                            target="_blank"
                            >RESUME <FontAwesomeIcon icon={faDownload} aria-label="Download icon"/>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}