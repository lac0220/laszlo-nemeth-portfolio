import "./contact.scss";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact  () {

    //scroll to the top once open
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []) 

    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors} } = useForm();
    const sendEmail = (data, e) => {
    console.log(data);

    emailjs.sendForm("service_wxap2rb", "template_w49gu6l", e.target, "TtX-buXBtDBrY53XD")
        .then(() => {
            navigate("/laszlo-nemeth-portfolio/message");
        }, (error) => {
            alert("Something went wrong. Please try again later");
            // console.log(error);
        });
        e.target.reset()
    };

    return (
        <section>
            <h1>Contact</h1>
            <hr />
            <div className="contact">
                <div className="contact_container">
                    <form onSubmit={handleSubmit(sendEmail)}>
                        <label htmlFor="name">
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Name*" 
                                {...register("name", { required: true })} 
                            />
                            {errors.name?.type === "required" && <span style={{fontWeight: "bold", color: "#FF6661"}}>This field is required!</span>}
                            </label>
                        <label htmlFor="email">
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="Email*" 
                                {...register("email", { required: true })} 
                            />
                            {errors.name?.type === "required" && <span style={{fontWeight: "bold", color: "#FF6661"}}>This field is required!</span>}
                        </label>
                        <label htmlFor="subject">
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                placeholder="Subject" 
                            />
                        </label>
                        <label htmlFor="message">
                            <textarea 
                                id="comment" 
                                name="message" 
                                placeholder="Your message" 
                                style={{height: '200px' }} 
                                alt="Textarea" 
                            />
                        </label>
                        <label htmlFor="contact-submit">
                            <input 
                                type="submit" 
                                value="Send" 
                            />
                        </label>
                    </form>
                    <ul>
                        <li>
                            <a 
                                href="tel:420792588255"
                                target="_blank"
                                aria-label="Phone number"
                                rel="noopener noreferrer"
                                ><i><FontAwesomeIcon icon={faMobileScreenButton} aria-label="Phone icon" title="Call me" /></i>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="mailto:nemeth0220@gmail.com?subject=Contact"
                                target="_blank"
                                aria-label="Email address"
                                rel="noopener noreferrer"
                                ><i><FontAwesomeIcon icon={faEnvelope} aria-label="Message icon" title="Send me an email" /></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <hr />
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.257681784016!2d14.4567509!3d50.044003999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93ecc6b130a9%3A0x470ad0d11ccdf599!2zVMWZZWJvxYhza8OhIDU5My85LCAxNDAgMDAgUHJhaGEgNC1NaWNobGU!5e0!3m2!1sen!2scz!4v1678746425452!5m2!1sen!2scz"
                        allowFullScreen=""
                        title="Map"
                    />
                    <p>Třeboňská 593/9, 140 00 Prague 4</p>
                    <p>Czech Republic</p>
                </div>
            </div> 
        </section>
    );
};