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
                    <p>My IT journey began in technical support at <span style={{fontWeight: "bold", color: "#FF6661"}}>Hewlett-Packard</span> in Ireland, where I developed a strong foundation in problem-solving and customer-focused delivery. After several years in taxation - working closely with developers to implement automated services - I returned fully to the technology field.</p> 
                    <p>Following an intensive <span style={{fontWeight: "bold", color: "#FF6661"}}>full-stack development program</span>, I specialized in front-end development with a focus on React.js, contributing to the development of responsive web applications and automated testing solutions.</p>
                    <p>I later transitioned into financial services as a <span style={{fontWeight: "bold", color: "#FF6661"}}>User Acceptance Testing Specialist</span>, validating business requirements in collateral operations and working with SWIFT messaging and SQL-based backend processes.</p> 
                    <p>Today, I work as a <span style={{fontWeight: "bold", color: "#FF6661"}}>Product Manager in APIs and Data Standardization</span>, contributing to digital securities issuance and API-driven financial services. My focus lies in API data models, OpenAPI documentation, stakeholder alignment, and building scalable, maintainable solutions within regulated environments.</p>
                    <p><span style={{fontWeight: "bold"}}>I am always eager to grow my IT skills and take on new challenges in innovative, tech-driven environments</span></p>
                </div>
                <ul className="about__contact"> 
                    <li>
                        <i><FontAwesomeIcon icon={faAnglesDown}/></i>
                        <Link to="/contact" aria-label="Contact page">MESSAGE ME</Link>
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