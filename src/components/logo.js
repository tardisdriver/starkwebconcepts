import React from 'react';
import { Link } from 'react-router-dom';

import './logo.css';

export default function Logo() {
    return (
        <Link to='/' className='logo-link'>
            <div id='logo'>
                <span>Stark Web Concepts</span>
            </div>
        </Link>
    );
}