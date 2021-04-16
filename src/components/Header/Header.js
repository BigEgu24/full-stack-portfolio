import React from 'react';
import "./Header.scss";
import Wrapper from '../Wrapper/Wrapper';
import {Link as ScrollLink} from "react-scroll";
const Link = require("react-router-dom").Link;

export default function Header() {
    return (
        <header className="flex">
            <Wrapper 
                flex={true}
                spaceBetween={true}
                itemsCenter
            >
                <div className="logo">
                    <Link to="/">
                        <img src="./images/logo.png" alt="" className="img" height="45" width="47"/>
                    </Link>
                </div>
                <ul className="nav flex">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link target="__blank" to="/resume.pdf">Resume</Link>
                    </li>
                    <li>
                        {/* <ScrollLink 
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={300}
                        className="pointer"
                        >
                            Projects
                        </ScrollLink> */}
                        <Link to="/#projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </Wrapper>
        </header>
    )
}
