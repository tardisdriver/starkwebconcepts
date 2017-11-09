import React from 'react';

import ProjectItem from './project-item';
import Back from './back';
import './projects.css';

const projectList = require('../projects.json');

export default function Projects(props) {
    const projectsRender = projectList.map((project, index) =>
        <ProjectItem key={index} {...project} />
    );
    return (
        <div id='projects-list'>
            <Back />
            <h1 id='proj-list-head'>Projects</h1>
            {projectsRender}
        </div>
    );
}
