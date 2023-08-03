import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css"

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
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

const ContactForm = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section5 = document.getElementById("section5");
      if (section5) {
        const { top, height } = section5.getBoundingClientRect();
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
    <div className="contact-form-content">
      <div className="contact-h1-div">
        <h1 className="h1-content">CONTACT</h1>
      </div>
      <div id="contact-form-section">
        <div className="container">
          {isSectionVisible && (
            <motion.div
              className="item"
              variants={item}
              whileHover={{ scale: 1.2 }}
            >
              <h2 className="item-title">Title Here</h2>
              <p className="item-text">
                Some text describing the item goes here.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
