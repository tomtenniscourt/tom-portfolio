import React from "react";
import { motion, useAnimation } from "framer-motion";
import "./App.css";
import { Link } from "react-scroll";

const skills = [
  "HTML5",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "React.js",
  "Ruby",
  "Ruby on Rails",
  "Bootstrap",
  "MongoDB",
  "PostgreSQL",
];

const ScalingDiv = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const controls = useAnimation();

  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about-section");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(elementTop < windowHeight);
      }
    };

    const handleScale = () => {
      if (isVisible) {
        controls.start({ scale: 2.0 }); 
      } else {
        controls.start({ scale: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScale();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, isVisible]);

  return (
    <motion.div animate={controls} transition={{ duration: 0.3, delay: 0.5 }}>
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div id="about-section">
      <ScalingDiv>
        <div className="about-section-title">
          <h1 className="about-me-h1">ABOUT ME</h1>
          <p className="about-me-p">
            Test text for when I can think of something better
          </p>
        </div>
      </ScalingDiv>

      <ScalingDiv>
        <div className="about-section-subtitle">
          <div className="skills-part">
            <h2 className="about-me-h2">My Skills</h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-box" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="about-part">
            <h2 className="about-me-h2">Who am I?</h2>
            <p className="about-me-subtitle-p">
              I have just finished a three month intensive course that taught
              the fundamentals of HTML5, CSS, and JavaScript, in order to
              prepare myself for a career in Software Engineering and
              Development. A collection of some applications I have built can be
              seen in the projects section.
              <br />
              <br />
              "I am actively seeking job opportunities where I can make
              meaningful contributions, continuously learn, and grow as a
              professional. With a solid foundation as a trained full stack
              engineer, I find the most fulfillment and joy working on the front
              end of projects. If you have an exciting opportunity that aligns
              with my skills and experience, I would be thrilled to hear from
              you!"
              <br />
              <div className="button-container-about">
                <Link
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-60} 
                  duration={500}
                >
                  <button className="contact-me-button">GET IN TOUCH 🙂</button>
                </Link>
              </div>
            </p>
          </div>
        </div>
      </ScalingDiv>
    </div>
  );
};

export default About;
