import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "./App.css";

function App() {
  const navBarHeight = 60; // Update this with the actual height of your nav bar

  const navLinkStyle = {
    color: "#ffffff",
    fontSize: "1rem", // Adjust the font size as needed
    fontWeight: "bold", // Make the links bold (optional)
    transition: "transform 0.2s ease", // Add a smooth transition on the transform property
    marginLeft: "20px", // Add left margin for spacing between links
    cursor: "pointer", // Change the cursor to pointer on hover
  };

  const sectionStyle = {
    height: "1000px",
  };

  const contentStyle = {
    paddingTop: navBarHeight + "px", // Add padding to the top of the content
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand
          href="#home"
          style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: "bold" }}
        >
          Tom's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-navBarHeight} // Adjust the offset to account for the nav bar height
              duration={500}
              style={navLinkStyle}
              activeStyle={{ textDecoration: "underline" }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Section 1
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
          id="home"
          style={{ ...sectionStyle, backgroundColor: "#f0f0f0" }}
        >
          <br />
          <h1>Tom Court: Software Engineer</h1>
        </div>
        <div
          id="about"
          style={{ ...sectionStyle, backgroundColor: "#e0e0e0" }}
        >
          Section 2 (Height: 1000px)
        </div>
        <div
          id="projects"
          style={{ ...sectionStyle, backgroundColor: "#d0d0d0" }}
        >
          Section 3 (Height: 600px)
        </div>
        <div
          id="contact"
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
