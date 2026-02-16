import "./contact.scss";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact  () {

    //scroll to the top once open
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []) 

    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors} } = useForm();
    const sendEmail = (data, e) => {
    console.log(data);

    emailjs.sendForm("service_s607sx9", "template_w49gu6l", e.target, "TtX-buXBtDBrY53XD")
        .then(() => {
            navigate("/message");
        }, (error) => {
            alert("Something went wrong. Please try again later");
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
                    <p>By email</p>
                    <p className="pulse">
                       <a 
                            href="mailto:nemeth0220@gmail.com?subject=Contact"
                            target="_blank"
                            aria-label="Email address"
                            rel="noopener noreferrer"
                            ><i><FontAwesomeIcon icon={faEnvelope} aria-label="Message icon" title="Send me an email" /></i>
                        </a>
                    </p>
                </div>
                <hr />
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.7860959311506!2d14.515797376813374!3d50.10901061188915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bedd5a386103f%3A0x4d8c2dbaa15ed0b3!2sSmr%C5%BEov%C3%BDch%201035%2F10%2C%20190%2000%20Praha%209!5e0!3m2!1sen!2scz!4v1741729545680!5m2!1sen!2scz"
                        allowFullScreen=""
                        title="Map"
                    />
                    <p>Smržových 1035/10, 190 00 Prague 9</p>
                    <p>Czech Republic</p>
                </div>
            </div> 
        </section>
    );
};