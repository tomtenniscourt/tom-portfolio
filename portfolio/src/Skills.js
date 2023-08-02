import * as React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 3,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Skills = () => {
  const [isSectionVisible, setIsSectionVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const section4 = document.getElementById("section4");
      if (section4) {
        const { top, height } = section4.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visiblePercentage = (viewportHeight - top) / height;

        setIsSectionVisible(visiblePercentage >= 0.55);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="skill-h1-div">
        <h1 className="h1-content">ABOUT ME</h1>
      </div>
      <div className="skill-content">
        <div id="skills-section">
          {isSectionVisible && (
            <motion.ul
              className="container-skills"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.li
                className="item-skills"
                variants={item}
                whileHover={{ scale: 1.2 }}
              />
            </motion.ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
