import React from 'react';
import "./Contact.scss";
import Icon from '@mdi/react';
import { 
    mdiChevronLeft
} from '@mdi/js';
import Button from '../../components/Button/Button';
const Link = require("react-router-dom").Link;

export default function Contact() {

    return (
        <div className="contact-page" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/nature.png')` }}>
            <Link to={process.env.PUBLIC_URL+"/"} className="back-btn absolute flex">
                <Icon 
                path={mdiChevronLeft}
                size={1}
                color="white"/>
                <p className="relative">Back</p>
            </Link>
            <div className="contact-form absolute flex column">
                <div className="container margin-auto">
                    <h1 className="title">Contact</h1>
                    <div className="input flex column">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="input flex column">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="input flex column">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" cols="30" rows="10"></textarea>
                    </div>
                    <div className="flex" style={{ float: 'right' }}>
                        <Button
                            type="blue"

                        >
                            SEND
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
