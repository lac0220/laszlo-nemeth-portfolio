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
                <div className="about__text">
                    <p>My IT journey began at <span style={{fontWeight: "bold", color: "#FF6661"}}>Hewlett-Packard</span> in Ireland, where I worked as <span style={{fontWeight: "bold", color: "#FF6661"}}>German Technical Support Analyst</span>, providing first-line support across a range of hardware and software. Afterward, I spent several years in taxation, collaborating with software developers to implement automated tax services. However, my passion for technology ultimately drew me back to the IT field</p> 
                    <p>In <span style={{fontFamily: '"Times New Roman", Times, serif'}} >2021</span>, I completed an intensive <span style={{fontWeight: "bold", color: "#FF6661"}}><span style={{fontFamily: '"Times New Roman", Times, serif'}} >12</span>-week full-stack web development course</span>, gaining experience with widely used programming languages and frameworks such as JavaScript, PHP, and React.js. I quickly developed a strong interest in UI design and the logic behind it, which led me to <span style={{fontWeight: "bold", color: "#FF6661"}}>specialize in front-end development</span>, where I found a strong affinity for React.js and its UI-driven layouts.</p>
                    <p>Shortly after completing my training, I secured my first internship as a <span style={{fontWeight: "bold", color: "#FF6661"}}>Junior Front-End Developer</span>, where I helped build a user-friendly order management app for a digital marketing company. My contributions included <span style={{fontWeight: "bold", color: "#FF6661"}}> developing React.js components</span> and conducting <span style={{fontWeight: "bold", color: "#FF6661"}}> automated unit tests</span> to identify and resolve bugs.</p> 
                    <p>Seeking to broaden my expertise, I transitioned into the financial services sector as a <span style={{fontWeight: "bold", color: "#FF6661"}}> User Acceptance Testing Specialist</span>. In this role, I analyzed user stories to ensure alignment with business needs in collateral operations and executed test cases within a UAT environment <span style={{fontWeight: "bold", color: "#FF6661"}}>using agile methodologies</span>. I also simulated user behavior by <span style={{fontWeight: "bold", color: "#FF6661"}}>sending SWIFT messages</span> and validated back-end processes using <span style={{fontWeight: "bold", color: "#FF6661"}}>SQL</span>.</p>
                    <p>Most recently, I joined the API & Pre-Issuance Eurobonds department as a <span style={{fontWeight: "bold", color: "#FF6661"}}>Product Manager</span>, driving the  D<span style={{fontFamily: '"Times New Roman", Times, serif'}}>7</span> digital issuance  by <span style={{fontWeight: "bold", color: "#FF6661"}}>updating the data models and developing the D<span style={{fontFamily: '"Times New Roman", Times, serif'}}>7</span> Navigator site</span> with optimized UX features. I also define product roadmaps and design robust API structures using <span style={{fontWeight: "bold", color: "#FF6661"}}>Swagger</span>.</p>
                    <p><span style={{fontWeight: "bold"}}>I am always eager to grow my IT skills and take on new challenges in innovative, tech-driven environments</span></p>
                </div>
                <ul className="about__contact"> 
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