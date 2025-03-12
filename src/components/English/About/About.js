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
                <p>My first IT job experience was at <span style={{fontWeight: "bold", color: "#FF6661"}}>Hewlett-Packard</span> in Ireland in <span style={{fontFamily: '"Times New Roman", Times, serif'}}>2015</span>. I worked as a <span style={{fontWeight: "bold", color: "#FF6661"}}>German Technical Support Analyst</span>, providing first-line technical support on the full range of hardware and software. My daily tasks were to deliver solutions through <span style={{fontWeight: "bold", color: "#FF6661"}}>problem research and analytical troubleshooting.</span> Later, I spent a few years in taxation, implementing new automated tax services in cooperation with software developers. These prior work experiences guided me to discover new work methods and technologies.</p>
                <p>Finally, my passion for IT got me back on track. I decided to dive into the World of Coding and <span style={{fontWeight: "bold", color: "#FF6661"}}>completed a <span style={{fontFamily: '"Times New Roman", Times, serif'}} >12</span>-week intense Full-Stack Web Development course</span> in November <span style={{fontFamily: '"Times New Roman", Times, serif'}} >2021</span>. I learned about widely used programming languages and frameworks like JavaScript, PHP, and React.js. Since I was fascinated by the UI design and the code that powers it in an application, I have chosen to <span style={{fontWeight: "bold", color: "#FF6661"}}>focus on front-end development.</span> Eventually, I enjoyed coding with React.js and its UI-driven layouts.</p>
                <p>After all, I started my first<span style={{fontWeight: "bold", color: "#FF6661"}}> internship as a Junior Front-End Developer</span> in May <span style={{fontFamily: '"Times New Roman", Times, serif'}} >2022</span> to gain experience in supporting a software development team. The project was to build and host internal order management software on the Google Cloud Platform for a digital marketing company. I contributed<span style={{fontWeight: "bold", color: "#FF6661"}}> coding in React.js</span> and performed automated unit testing to identify and fix bugs. Besides, I <span style={{fontWeight: "bold", color: "#FF6661"}}>optimised the user interface design</span> and customised user-facing components to meet operational needs.</p> 
                <p>Next, I have decided to expand my skills of testing in financial services and started work as a<span style={{fontWeight: "bold", color: "#FF6661"}}> User Acceptance Testing Specialist,</span> analysing and testing specific user stories in ECMS collateral management services. I executed test cases inside a UAT environment with an <span style={{fontWeight: "bold", color: "#FF6661"}}> agile testing methodology approach </span>and documented test results. Nevertheless, I simulated the user behaviour by sending <span style={{fontWeight: "bold", color: "#FF6661"}}>SWIFT messages</span> and monitored them with <span style={{fontWeight: "bold", color: "#FF6661"}}>SQL in databases.</span></p>
                <p>I am currently working as a<span style={{fontWeight: "bold", color: "#FF6661"}}> Product Manager in the API & Pre-Issuance Eurobonds</span> department to improve Digital Securities Issuance.</p>
                <p><span style={{fontWeight: "bold"}}><u>To expand the scope of my testing skills, I am open to discussing and joining challenging IT projects</u></span></p>
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