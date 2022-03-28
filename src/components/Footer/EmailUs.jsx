import { FcPhoneAndroid } from "react-icons/fc";
import { RiMessageFill } from "react-icons/ri";

function EmailUs() {
  return (
    <div className="contact-us">
      <p className="addrass">Lorem ipsum dolor sit, Egypt</p>
      <a className="phone" href="tel:+201144780246">
        <span>
          <FcPhoneAndroid />
        </span>
        +201144780246
      </a>
      <a className="email" href="mailto:khalidsalah1522@gmail.com">
        <span>
          <RiMessageFill />
        </span>
        khalidsalah1522@gmail.com
      </a>
    </div>
  );
}

export default EmailUs;
