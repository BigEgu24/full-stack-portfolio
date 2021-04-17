import React from 'react';
import "./Header.scss";
import Wrapper from '../Wrapper/Wrapper';
import Icon from '@mdi/react';
import { 
    mdiChevronLeft
} from '@mdi/js';
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
                    <Link to={process.env.PUBLIC_URL+"/"}>
                        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" className="img" height="45" width="47"/>
                    </Link>
                </div>
                <ul className="nav flex">
                    <li>
                        <Link to={process.env.PUBLIC_URL+"/about"}>About</Link>
                    </li>
                    <li>
                        <Link target="__blank" to={process.env.PUBLIC_URL+"/resume.pdf"}>Resume</Link>
                    </li>
                    <li>
                        <Link to={process.env.PUBLIC_URL+"/#projects"}>Projects</Link>
                    </li>
                    <li>
                        <Link to={process.env.PUBLIC_URL+"/contact"}>Contact</Link>
                    </li>
                </ul>
            </Wrapper>
        </header>
    )
}
