import "./language_logo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import img_uk_flag from "../../../img/logo/uk_flag.svg";

export default function Language () {

    return (
        <section className="language_logo">
            {/* <img src={img_uk_flag} alt="UK flag" />
            <div>
                <span>English</span>
                <span className="language_logo-mobile">EN</span>
                <i><FontAwesomeIcon icon={faAngleDown} aria-label="Angle down icon" /></i>
                <div className="triangle" />
                <ul>
                    <li>
                        <a href="german.html">
                            <i></i>
                            <span>German</span>
                            <span className="language_logo-mobile">DE</span>
                        </a>
                    </li>
                </ul>
            </div> */}
        </section>
    );
}