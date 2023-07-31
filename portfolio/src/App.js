import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "./App.css";
import About from "./About"; 
import Projects from "./Projects"; 



function App() {
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
              to="section2"
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
              About Me
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
              Contact
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
              Section 5
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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
          id="section2"
          style={{
            ...sectionStyle,
            backgroundColor: "#e0e0e0",
            position: "relative",
          }}
        >
          <About />
        </div>

        <div
          id="section3"
          style={{ ...sectionStyle, backgroundColor: "#d0d0d0" }}
        >
          <Projects />{" "}
        </div>

        <div
          id="section4"
          style={{ ...sectionStyle, backgroundColor: "#c0c0c0" }}
        >
          Section 4 (Height: 1200px)
        </div>

        <div
          id="section5"
          style={{ ...sectionStyle, backgroundColor: "#b0b0b0" }}
        >
          Section 5 (Height: 900px)
        </div>
      </div>
    </div>
  );
}

export default App;