import "./home.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import img_avatar from "../../../img/avatar.webp";

export default function Home() {

    //scroll to the top once open
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) 

    return (
        <section className="home">
            <ul>
                <li>
                    <p><Link to="/laszlo-nemeth-portfolio/about" aria-label="About page">Laszlo Nemeth</Link>  </p> 
                    <p>Product Manager <FontAwesomeIcon icon={faCode} color="#FF0700" aria-label="Code icon" /> FE Developer</p>
                </li>
                <li><img src={img_avatar} alt="Avatar" /></li>
            </ul>
            <hr />
            <div>
                <p>"There's no failure, only feedback"</p>
                <Link to="/laszlo-nemeth-portfolio/contact" aria-label="Contact page">LET'S WORK TOGETHER</Link>
            </div>
        </section> 
    );
}