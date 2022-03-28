import "../assets/css/contact.css";
import { BsArrowDown } from "react-icons/bs";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="col1">
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, esse
            id voluptatum sequi quisquam ipsum dolor sit amet consectetur
            exercitationem!
          </p>
          <div className="arrow">
            <BsArrowDown />
          </div>
        </div>
        <div className="col2">
          <form action="">
            <label htmlFor="name">
              <p>Name</p>
              <input type="text" id="name" placeholder="Enter Your Name" />
            </label>
            <label htmlFor="email">
              <p>Email</p>
              <input type="text" id="email" placeholder="Enter Your Email" />
            </label>
            <label htmlFor="message">
              <p>Message</p>
              <textarea
                name=""
                id="message"
                placeholder="Enter Your Message"
              ></textarea>
            </label>
            <div className="submit">
              <div className="arrow">
                <BsArrowDown />
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
