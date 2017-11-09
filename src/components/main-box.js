import React from 'react';
import { Link } from 'react-router-dom';

import './main-box.css';

export default function MainBox(props) {
    return (
        <Link to={props.link}>
            <div className='main-box'>
                <h1 className='main-box-head'>{props.text}</h1>
                <img className={props.text} src={props.img} alt={props.text} />
            </div>
        </Link>
    );
};
