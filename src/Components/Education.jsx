import { motion } from "framer-motion";
import "../styles/Education.css";

const educationData = [
  {
    degree: "B.E. Mechanical Engineering",
    institute: "Savitribai Phule Pune University",
    details: "SGPA: 9.89 | CGPA: 7.52 | First Class"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Vidhyadham Junior College",
    details: "Percentage: 60.46%"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institute: "Vidhyadham High School",
    details: "Percentage: 88.20%"
  }
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        <motion.h2
          className="education-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Education
        </motion.h2>

        <div className="education-list">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{item.degree}</h3>
              <h4>{item.institute}</h4>
              <span className="edu-year">{item.year}</span>
              <p>{item.details}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
