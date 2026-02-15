import { motion } from "framer-motion";
import "../styles/Skills.css";

const skillsData = [
  {
    category: "Quality & Inspection",
    skills: [
      "Incoming Quality Control (IQC)",
      "Supplier Quality Management",
      "IS 2500 Inspection Standard",
      "OS&D Verification",
      "NCR & Corrective Actions",
      "Supplier Audits"
    ]
  },
  {
    category: "Manufacturing Domain",
    skills: [
      "LED TV Manufacturing",
      "Home Appliances",
      "Plastic Moulding Inspection",
      "Electronic Component Testing",
      "Google TV / Android TV / WebOS"
    ]
  },
  {
    category: "Software & Tools",
    skills: [
      "SAP",
      "GSOP",
      "EPPS",
      "MS Excel",
      "MS Word",
      "PowerPoint"
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="skills-title"
        >
          My Skills
        </motion.h2>
        <div className="skills-grid">
          {skillsData.map((item, index) => (
            <motion.div
              key={index}
              className="skills-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{item.category}</h3>

              <ul>
                {item.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
