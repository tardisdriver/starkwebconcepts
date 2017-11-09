import React from 'react';
import { Link } from 'react-router-dom';

import './back.css';

export default function Back() {
    return (
        <Link to='/'>
            <button id='back'> Back</button>
        </Link>
    );
}