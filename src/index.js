import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./component/home";
import Scroll from "./component/scroll";
import Schedule from "./component/schedule";
import Statement from "./component/statement";
import Organizer from "./component/organizer";
import Judges from "./component/judges";
import About from "./component/about";
import Logo from "./img/logo.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

function Content() {

    return (
        <div>
         
            <div className="">
           
                <nav class="navbar navbar-expand-lg  position-fixed ">
                    <a class="navbar-brand navbarimg" href="#home">
                        <img src={Logo} alt="logo" />
                    </a>
    

                    <div
                        class="collapse navbar-collapse "
                        id="navbarSupportedContent navbar"
                    >
                        <ul class="navbar-nav mr-auto nav-link nav-links navbarul">
                            <li class="nav-item active navbarli">
                                <Link
                                    activeClass="active"
                                    class=""
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="navbara"
                                >
                                    Home{" "}
                                </Link>
                            </li>
                            <li class="nav-item navbarli">
                                <Link
                                    activeClass="active"
                                    class=""
                                    to="Schedule"
                                    spy={true}
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="navbara"
                                >
                                    Schedule{" "}
                                </Link>
                            </li>
                            <li class="nav-item navbarli">
                                <Link
                                    activeClass="active"
                                    class=""
                                    to="ProblemStatement"
                                    spy={true}
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="navbara"
                                >
                                    Problem statement{" "}
                                </Link>
                            </li>
                            <li class="nav-item active navbarli">
                                <Link
                                    activeClass="active"
                                    class=""
                                    to="organizer"
                                    spy={true}
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="navbara"
                                >
                                    {" "}
                                    Organizer{" "}
                                </Link>
                            </li>
                            <li class="nav-item active navbarli">
                                <Link
                                    activeClass="active"
                                    class=""
                                    to="judges"
                                    spy={true}
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="navbara"
                                >
                                    {" "}
                                    Judges{" "}
                                </Link>
                            </li>
                            <li class="nav-item active navbarli">
                                <Link
                                    activeClass="active"
                                    class=""
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="navbara"
                                >
                                    {" "}
                                    About Us{" "}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Home />
            <Schedule />
            <Statement />
            <Organizer /><hr></hr>
            <Judges />
            <About />
            <Scroll showBelow={250} />
        </div>
    );
}
const content = <Content></Content>;
ReactDOM.render(content, document.getElementById("root"));
