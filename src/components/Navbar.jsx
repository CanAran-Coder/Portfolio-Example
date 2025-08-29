import {Link} from "react-scroll"
import ModeChanger from "./ModeChanger";
function Navbar() {
    return ( 
        <div className="Navbar">
            <Link spy={true} className="navbarItem" to="aboutMe" smooth={true} duration={100}>About Me</Link>
            <Link spy={true} className="navbarItem" to="projects" smooth={true} duration={100}>Projects</Link>
            <Link spy={true} className="navbarItem" to="skills" smooth={true} duration={100}>Skills</Link>
            <Link spy={true} className="navbarItem" to="contactMe" smooth={true} duration={100}>Contact Me</Link>
            <ModeChanger/>
        </div>
     );
}

export default Navbar;