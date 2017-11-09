import React from 'react';

import './home.css';

import MainBox from './main-box';

const boxes = [
    { text: 'Portfolio', img: '/images/projectBG.JPG', link: '/projects' },
    { text: 'About', img: '/images/node_icon2.png', link: '/about' },
    { text: 'Contact', img: '/images/emailicon.png', link: '/contact' }
];

export default function Home(props) {
    const boxesRender = boxes.map((box, index) =>
        <MainBox key={index} {...box} />
    );
    return (
        <div className='main-board'>
            {boxesRender}
        </div>
    );
}

