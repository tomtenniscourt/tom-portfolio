import React, { useEffect, useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import Tictactoe from "./Tictactoe"; 


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 2,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
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

const Projects = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section3 = document.getElementById("section3");
      if (section3) {
        const { top, height } = section3.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visiblePercentage = (viewportHeight - top) / height;

        setIsSectionVisible(visiblePercentage >= 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="projects-section">
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate={isSectionVisible ? "visible" : "hidden"}
      >
        {/* Item 1 */}
        <motion.li key={0} className="item item-0" variants={item}>
          <div className="item-content item-content-0">
            <p className="item-title item-title-0">Item Title 1</p>
            <p className="item-description item-description-0">
              This is the description for Item 1.
            </p>
          </div>
        </motion.li>

        {/* Item 2 */}
        <motion.li key={1} className="item item-1" variants={item}>
          <div className="item-content item-content-1">
            <p className="item-title item-title-1">Item Title 2</p>
            <p className="item-description item-description-1">
              This is the description for Item 2.
            </p>
          </div>
        </motion.li>

        {/* Item 3 */}
        <motion.li key={2} className="item item-2" variants={item}>
          <div className="item-content item-content-2">
            <p className="item-title item-title-2">Item Title 3</p>
            <p className="item-description item-description-2">
              This is the description for Item 3.
            </p>
          </div>
        </motion.li>

        {/* Item 4 */}
        <motion.li key={3} className="item item-3" variants={item}>
          <div className="item-content item-content-3">
            <p className="item-title item-title-3">Item Title 4</p>
            <p className="item-description item-description-3">
              This is the description for Item 4.
            </p>
          </div>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Projects;
