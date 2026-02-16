import "./message.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

export default function Message() {
    return (
        <section className="message">
            <h1>Thank you for your message</h1>
            <i><FontAwesomeIcon icon={faSmile} aria-label="Smile icon" /></i>
            <h1>I will get back to you as soon as possible</h1>
            <h2>Back to the <Link to="/" aria-label="Home page">home page</Link>
            </h2>
        </section>
    );
}