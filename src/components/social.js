import React from 'react';

import './social.css';

export default function Social(props) {
    return (
        <div className='social-item'>
            <a href={props.link} target='_blank'>
                <img className='social-img' src={props.img} alt={props.alt} />
                <p className='social-name'>{props.account}</p>
            </a>
        </div>
    );
}