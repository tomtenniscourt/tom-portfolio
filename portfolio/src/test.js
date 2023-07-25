// import React from "react";
// import "./App.css";

// function About() {
//   return (
//     <div className="about-content">
//       <div className="about-skills">
//         <div className="skills-header">
//           <h2>My Skills</h2>
//         </div>
//         <div className="skill-box">
//           <p>HTML 5</p>
//         </div>
//         <div className="skill-box">
//           <p>CSS</p>
//         </div>
//         <div className="skill-box">
//           <p>JavaScript</p>
//         </div>
//         <div className="skill-box">
//           <p>Node.js</p>
//         </div>
//         <div className="skill-box">
//           <p>Express.js</p>
//         </div>
//         <div className="skill-box">
//           <p>React.js</p>
//         </div>
//         <div className="skill-box">
//           <p>Ruby</p>
//         </div>
//         <div className="skill-box">
//           <p>Ruby on Rails</p>
//         </div>
//         <div className="skill-box">
//           <p>Bootstrap</p>
//         </div>
//         <div className="skill-box">
//           <p>MongoDB</p>
//         </div>
//         <div className="skill-box">
//           <p>PostgreSQL</p>
//         </div>
//       </div>
//       <div className="about-profile">
//         <h2>Who am I?</h2>
//         <p>I am Tom and this is test text</p>
//       </div>
//     </div>
//   );
// }

// export default About;


// SCALING EFFECT
const ScalingDiv = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(className);
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(elementTop < windowHeight);
      }
    };

    const handleScale = () => {
      if (isVisible) {
        controls.start({ scale: 3 });
      } else {
        controls.start({ scale: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScale();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, className, isVisible]);

  return (
    <motion.div animate={controls} transition={{ duration: 0.3, delay: 0.5 }}>
      {children}
    </motion.div>
  );
};