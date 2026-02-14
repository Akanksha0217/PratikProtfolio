import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Disable scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div className={`sidebar ${open ? "open" : ""}`}>
        <h2 className="logo-text">Portfolio</h2>

        <ul className="nav-links">
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
          <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
