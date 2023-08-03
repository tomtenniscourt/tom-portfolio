# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


This is the code for my app.js file, which acts as a homepage: 

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "./App.css";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactForm from "./ContactForm";

import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navBarHeight = 60;

  const navLinkStyle = {
    color: "#ffffff",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "transform 0.2s ease",
    marginLeft: "20px",
    cursor: "pointer",
  };

  const sectionStyle = {
    height: "1000px",
  };

  const contentStyle = {
    paddingTop: navBarHeight + "px",
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand
          href="#home"
          style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: "bold" }}
        >
          Tom Court
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-navBarHeight}
              duration={500}
              style={navLinkStyle}
              activeStyle={{ textDecoration: "underline" }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-navBarHeight}
              duration={500}
              style={navLinkStyle}
              activeStyle={{ textDecoration: "underline" }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-navBarHeight}
              duration={500}
              style={navLinkStyle}
              activeStyle={{ textDecoration: "underline" }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-navBarHeight}
              duration={500}
              style={navLinkStyle}
              activeStyle={{ textDecoration: "underline" }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <div style={contentStyle}>
        <div
          id="section1"
          style={{
            ...sectionStyle,
            backgroundImage: 'url("https://i.imgur.com/09mIBEt.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#f0f0f0",
          }}
        >
          <br />
          <div className="home-content">
            <h1 className="home-h1">Tom Court: Software Engineer</h1>
            <p className="home-p">Test text goes here</p>
          </div>
        </div>

        <div
          id="section3"
          style={{ ...sectionStyle, backgroundColor: "#d0d0d0" }}
        >
          {/* Section 3 content (Projects) */}
          <Projects />
        </div>

        <div
          id="section4"
          style={{
            ...sectionStyle,
            backgroundColor: "#c0c0c0",
            position: "relative",
          }}
        >
          {/* Section 4 content (Skills) */}
          <Skills />
        </div>

        <div
          id="section5"
          style={{ ...sectionStyle, backgroundColor: "#b0b0b0" }}
        >
          {/* Section 5 content */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;

in section5, i am generating the code from ContactForm.js. I want this code to mimic the code in projects.js, which is here:

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

        setIsSectionVisible(visiblePercentage >= 0.55);
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
    <div class="project-content">
        <div class="project-h1-div">
        <h1 className="h1-content">PROJECTS</h1></div>
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
                {index === 0 && (
                  <div className="content-item-one">
                    <h2 className="item-h2">Tic Tac Toe</h2>
                    <p className="item-p">
                      A game of tic tac toe using simple JavaScript logic, that
                      can be played by two users on the same computer.
                    </p>
                  </div>
                )}
                {index === 1 && (
                  <div className="content-item-two">
                    <h2 className="item-h2">Dad Jokes</h2>
                    <p className="item-p">
                      Using a 3rd party API, a random 'Dad Joke' is generated on
                      the screen for the user
                    </p>
                  </div>
                )}
                {index === 2 && (
                  <div className="content-item-three">
                    <h2 className="item-h2">Weather App</h2>
                    <p className="item-p">
                      Another application that uses a 3rd party API - this time
                      using real-time data to fetch weather information for any
                      given U.S. zip code
                    </p>
                  </div>
                )}
                {index === 3 && (
                  <div className="content-item-four">
                    <h2 className="item-h2">Paint</h2>
                    <p className="item-p">
                      A JavaScript application that enables users to paint on a
                      blank canvas
                      <br />
                    </p>
                  </div>
                )}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Projects;

here is the css as well: 
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

.project-h1-div {
    padding-top: 40px;
}

.h1-content {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    text-align: center;
    font-size: 85px;
}

.container {
    width: 150px;
    height: 150px;
    display: grid;
    overflow: hidden;
    margin: 0;
    list-style: none;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10%;
}

.item {
    background: white;
    border-radius: 15%;
}

#projects-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72vh;
}

.content-item-one, .content-item-two, .content-item-three, .content-item-four {
    text-align: center;
}

.item-h2 {
    font-size: 7px;
    padding-top: 10px;
}

.item-p {
    font-size: 2px;
    margin: 4px;
    text-align: justify;
}
.button-tictactoe-go, .button-joke-go, .button-weather-go, .button-paint-go {
    height: 10px;
    font-size: 5px;
    border: 0.5px;
    }

However, there needs to be some changes. Firstly, class and id names all need to changed, so that they can be styled seperately from the projects.js elements. And most importantly, instead of four items I just want one item in the centre of the container. I also want the animation to start when 55% of section5 is displayed on the screen. Everything else should be the same

Please write the new code files for me 