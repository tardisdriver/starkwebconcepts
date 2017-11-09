import React from 'react';

import './project-item.css';

export default function ProjectItem(props) {
    return (
        <div className='project-item'>
            <a className='proj-link' href={props.pubLink} target='_blank'>
                <h2 className='proj-heading'>{props.title}</h2>
                <img className='proj-image' src={props.img} alt={props.title} />
                <p className='stack'>
                    <span>Stack used:</span>
                    <span>{props.stack}</span>
                </p>
                <p className='proj-descr'>{props.descr}</p>
                <a className='git-proj-link' href={props.gitLink} target='_blank'>{props.gitLink}</a>
            </a>
        </div>
    );
};