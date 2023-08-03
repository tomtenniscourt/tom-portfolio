import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const container = {
  hidden: { opacity: 0, scale: 0 },
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
const emailSubject = "Inquiry from Website";

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="contact-h1-div">
        <h1 className="contact-h1-content">CONTACT</h1>
      </div>
      <div className="contact-form-section">
        <motion.div
          className="contact-container"
          variants={container}
          initial="hidden"
          animate={isSectionVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="contact-item"
            variants={item}
            whileHover={{ scale: 1.2 }}
          >
            <h2 className="contact-item-title">Get in touch!</h2>
            <p className="contact-item-text">
              Tom Court
              <br />
              London
              <br />
              EC1V.
              <br />
              <a href="https://www.instagram.com/tomtenniscourt/">
                <img
                  className="sm-profile"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"
                  alt="Link to Instagram"
                />
              </a>
              <a href="https://www.linkedin.com/in/tom-court/">
                <img
                  className="sm-profile"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                  alt="Link to LinkedIn"
                />
              </a>
              <a href="https://github.com/tomtenniscourt">
                <img
                  className="sm-profile"
                  src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                  alt="Link to GitHub"
                />
              </a>
              <a href="mailto:tomcourt94@icloud.com?subject=Hello%20Tom">
                <img
                  className="email-profile"
                  src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
                  alt="Email Tom"
                />
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactForm;
