import { motion } from "framer-motion";
import "../styles/Experience.css";

const experienceData = [
  {
    company: "WORLD EMS PVT. LTD. (Gujarat)",
    role: "Sr. Engineer - IQC",
    period: "Apr 2024 – Present",
    description: [
      "Monitoring Quality control of raw materials for LED TV manufacturing.",
      "Handling OS&D verification and supplier audits.",
      "Preparing weekly/monthly LAR, LRN & supplier quality reports.",
      "Coordinating with vendors to improve product quality."
    ]
  },
  {
    company: "NEXT GENERATION MANUFACTURERS PVT. LTD. (Supa)",
    role: "Engineer - IQC",
    period: "March 2023 – Apr 2024",
    description: [
      "Maintained quality system as per IS 2500 standards.",
      "Solved production line complaints.",
      "Supplier coordination and defect analysis."
    ]
  },
  {
    company: "Haier Appliances India Pvt. Ltd (Pune)",
    role: "Graduate Apprentice Trainee (GAT) - IQC",
    period: "March 2022 – March 2023",
    description: [
      "Incoming Quality Assurance for TV/AC/REF.",
      "Electronic part inspection & functional trials.",
      "Plastic moulding defect analysis."
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="experience-title"
        >
          Work Experience
        </motion.h2>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <span className="period">{item.period}</span>

                <ul>
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
