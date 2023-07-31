import React, { useEffect, useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 4,
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
  expanded: {
    zIndex: 2,
    scale: 3,
  },
};

const Projects = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

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

  const handleItemClick = (index) => {
    setExpandedItem((prevItem) => (prevItem === index ? null : index));
  };

  return (
    <div id="projects-section">
      {isSectionVisible && (
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {[0, 1, 2, 3].map((index) => (
            <motion.li
              key={index}
              className={`item ${expandedItem === index ? "expanded" : ""}`}
              variants={item}
              onClick={() => handleItemClick(index)}
              whileHover={{ scale: 1.2 }}
            >
              {/* Individual Content for each item */}
              {index === 0 && (
                <div className="content-item-one">
                  <h2 className="item-h2">Tic Tac Toe</h2>
                  <p className="item-p">Some text for item 1</p>
                </div>
              )}
              {index === 1 && (
                <div className="content-item-two">
                  <h2 className="item-h2">Dad Jokes</h2>
                  <p className="item-p">Some text for item 1</p>
                </div>
              )}
              {index === 2 && (
                <div className="content-item-three">
                  <h2 className="item-h2">Weather App</h2>
                  <p className="item-p">Some text for item 1</p>
                </div>
              )}
              {index === 3 && (
                <div className="content-item-four">
                  <h2 className="item-h2">Paint</h2>
                  <p className="item-p">Some text for item 1</p>
                </div>
              )}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Projects;
