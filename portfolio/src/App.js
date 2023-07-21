import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "./App.css";

function App() {
  const navLinkStyle = {
    color: "#ffffff",
    fontSize: "1rem", // Adjust the font size as needed
    fontWeight: "bold", // Make the links bold (optional)
    transition: "transform 0.2s ease", // Add a smooth transition on the transform property
    marginLeft: "20px", // Add left margin for spacing between links
    cursor: "pointer", // Change the cursor to pointer on hover
  };

  const sectionStyle = {
    height: "750px", // Make each section 50% taller (original height: 500px)
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand
          href="#home"
          style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: "bold" }}
        >
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {" "}
            {/* Utilize ml-auto to align links to the right */}
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={navLinkStyle}
              activeStyle={{ textDecoration: "underline" }} // Add underline when link is active
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              } // Apply hover effect
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")} // Reset transform on hover exit
            >
              Section 1
            </Link>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={navLinkStyle}
              activeStyle={{ textDecoration: "underline" }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Section 2
            </Link>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={navLinkStyle}
              activeStyle={{ textDecoration: "underline" }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Section 3
            </Link>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={navLinkStyle}
              activeStyle={{ textDecoration: "underline" }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Section 4
            </Link>
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={0}
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

      <div
        id="section1"
        style={{ ...sectionStyle, backgroundColor: "#f0f0f0" }}
      >
        Section 1
      </div>

      <div
        id="section2"
        style={{ ...sectionStyle, backgroundColor: "#e0e0e0" }}
      >
        Section 2
      </div>

      <div
        id="section3"
        style={{ ...sectionStyle, backgroundColor: "#d0d0d0" }}
      >
        Section 3
      </div>

      <div
        id="section4"
        style={{ ...sectionStyle, backgroundColor: "#c0c0c0" }}
      >
        Section 4
      </div>

      <div
        id="section5"
        style={{ ...sectionStyle, backgroundColor: "#b0b0b0" }}
      >
        Section 5
      </div>
    </div>
  );
}

export default App;
