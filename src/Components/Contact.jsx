import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt ,FaLinkedin} from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

    

      <div className="contact-strip">

  <motion.a href="mailto:baykarpratik@gmail.com" className="contact-item" whileHover={{ scale: 1.05 }}>
    <FaEnvelope className="icon" />
    <span>baykarpratik@gmail.com</span>
  </motion.a>

  <motion.a href="tel:+919850052818" className="contact-item" whileHover={{ scale: 1.05 }}>
    <FaPhoneAlt className="icon" />
    <span>+91 9850052818</span>
  </motion.a>

  <motion.a
    href="https://www.linkedin.com/in/pratik-baykar-7b079a321/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
    whileHover={{ scale: 1.05 }}
  >
    <FaLinkedin className="icon" />
    <span>LinkedIn</span>
  </motion.a>

  <motion.div className="contact-item" whileHover={{ scale: 1.05 }}>
    <FaMapMarkerAlt className="icon" />
    <span>Pune, Maharashtra</span>
  </motion.div>

</div>

    </section>
  );
};

export default Contact;
