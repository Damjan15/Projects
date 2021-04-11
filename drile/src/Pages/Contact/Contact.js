import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import "./contact.css";

export const Contact = () => {
    return (
        <div className="contact">
            <form className="contact__form">
                <h3>Let's talk to us</h3>
                <div className="contact__heading">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Email" />
                </div>
                <div className="contact__center">
                    <input type="text" placeholder="Subject" />
                </div>
                <div className="contact__bottom">
                    <textarea placeholder="Message" cols="30" rows="6"></textarea>
                    <button>Submit</button>
                </div>
            </form>
            <div className="contact__details">
                <div className="detail">
                    <AiOutlineHome />
                    <span className="title">Address</span>
                    <span className="secondary__title">17 Elimatte Dr, Ashgrove</span>
                </div>

                <div className="detail">
                    <AiOutlinePhone />
                    <span className="title">Phone Number</span>
                    <span className="secondary__title">( +84) 8 3555 3203</span>
                </div>

                <div className="detail">
                    <AiOutlineMail />
                    <span className="title">Email</span>
                    <span className="secondary__title">drile.info@gmail.com</span>
                </div>
            </div>
        </div>
    )
}
