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
                <p>My first IT job experience was at <span style={{fontWeight: "bold", color: "#FF6661"}}>Hewlett-Packard</span> in Ireland. I worked as a <span style={{fontWeight: "bold", color: "#FF6661"}}>German Technical Support Analyst</span>, providing first-line technical support on the full range of hardware and software. Later, I spent a few years in taxation, implementing new automated tax services in cooperation with software developers, but my passion for IT got me back on track.</p> 
                <p>I decided to dive into the world of coding and <span style={{fontWeight: "bold", color: "#FF6661"}}>completed a <span style={{fontFamily: '"Times New Roman", Times, serif'}} >12</span>-week intense full-stack web development course</span> in <span style={{fontFamily: '"Times New Roman", Times, serif'}} >2021</span>. I learned about widely used programming languages and frameworks like JavaScript, PHP, and React.js. Since I was fascinated by the UI design and the code that powers it in an application, I have chosen to <span style={{fontWeight: "bold", color: "#FF6661"}}>focus on front-end development.</span> Eventually, I enjoyed coding with React.js and its UI-driven layouts.</p>
                <p>Shortly after the training, I started my first<span style={{fontWeight: "bold", color: "#FF6661"}}> internship as a Junior Front-End Developer</span> to gain programming experience and support a software development team. The project was to build and host internal order management software on the Google Cloud Platform for a digital marketing company. I contributed<span style={{fontWeight: "bold", color: "#FF6661"}}> coding in React.js</span> and performed automated unit testing to identify and fix bugs. Besides, I <span style={{fontWeight: "bold", color: "#FF6661"}}>optimised the user interface design</span> and customised user-facing components to meet operational needs.</p> 
                <p>Next, I decided to expand my testing skills in financial services and started working as a<span style={{fontWeight: "bold", color: "#FF6661"}}> User Acceptance Testing Specialist</span>. I tested specific user stories in ECMS collateral management services and executed test cases inside a UAT environment using an <span style={{fontWeight: "bold", color: "#FF6661"}}> agile testing methodology</span>. Nevertheless, I simulated user behaviour by sending <span style={{fontWeight: "bold", color: "#FF6661"}}>SWIFT messages</span> and monitored them with <span style={{fontWeight: "bold", color: "#FF6661"}}>SQL in databases.</span></p>
                <p>Recently, I have joined the <span style={{fontWeight: "bold", color: "#FF6661"}}>Product Management team in the API & Pre-Issuance Eurobonds</span> department to improve digital securities issuance services.</p>
                <p><span style={{fontWeight: "bold"}}>To expand the scope of my IT skills, I am always open to discussing and joining challenging projects</span></p>
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