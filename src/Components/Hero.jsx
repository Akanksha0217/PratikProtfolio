import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/dataProfile2.jpeg";
import "../styles/Hero.css";


const roles = [
  "Senior IQC Engineer",
  "Quality Control Engineer",
  "Mechanical Engineer | IQC Specialist",
  "Supplier Quality &Inspection Engineer"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="container hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h5 className="intro-text">Hi, I am</h5>

          <h1 className="hero-name">
            Pratik <span>Baykar</span>
          </h1>

          <h3 className="hero-role">
            I am a{" "}
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </h3>

          <p className="hero-desc">
           Experienced Quality Control Engineer with expertise in 
          Incoming Quality Assurance, Supplier Quality Management, 
          and Electronic Component Inspection for TV & Home Appliance Manufacturing.
          Skilled in SAP, GSOP, EPPS and implementation of quality systems 
          as per IS 2500 standards.
          </p>

          {/* <a href="/resume.pdf" className=" hero-btn1">
            DOWNLOAD CV
          </a> */}
          <a href="/resume.pdf" download className="hero-btn1">
  DOWNLOAD CV
</a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-img-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-img-border">
            <img src={profile} alt="profile" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
