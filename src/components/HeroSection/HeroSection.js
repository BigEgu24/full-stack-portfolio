import React from 'react';
import "./HeroSection.scss";

export default function HeroSection(props) {
    return (
        <>
            {
                props.homepage ? (
                    <div 
                    className={props.flex ? `hero-section homepage-banner flex ${props.alignItemsCenter ? "items-center" : null}` : "hero-section"}
                    style={{ backgroundImage: 'url("images/code-computer.png")' }}
                    >
                        {props.children}
                    </div>
                ) : (
                    <div 
                    className={props.flex ? `hero-section flex ${props.alignItemsCenter ? "items-center" : null}` : "hero-section"}
                    >
                        {props.children}
                    </div>
                )
            }
        </>
    )
}