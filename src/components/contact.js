import React from 'react';
import Back from './back';

import Social from './social';

import './contact.css';

const socialList = [
    { img: '/images/githubicon.jpg', account: 'tardisdriver', alt: 'GitHub', link: 'https://github.com/tardisdriver' },
    { img: '/images/twittericon.png', account: 'tardisdriver13', alt: 'Twitter', link: 'https://twitter.com/tardisdriver13' },
    { img: '/images/linkedinicon.png', account: 'Tracy Stark', alt: 'LinkedIn', link: 'https://www.linkedin.com/in/tracy-stark-5923442/' },
    { img: '/images/emailicon.png', account: 'stark.tracy@gmail.com', alt: 'Email', link: 'mailto: stark.tracy@gmail.com' }
];

export default function Contact(props) {
    const socialRender = socialList.map((acct, index) =>
        <Social key={index} {...acct} />
    );
    return (
        <div id='contact'>
            <Back />
            <h1 id='contact-head'>Contact</h1>
            <div id='social'>
                {socialRender}
            </div>
        </div>
    );
}



