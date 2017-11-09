import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';

import './page.css';

import Home from './home';
import Logo from './logo';
import Contact from './contact';
import About from './about';
import Projects from './projects';
import PortStack from './port-stack';


export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <HashRouter>
                <div className='test'>
                    <Logo />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/projects' component={Projects} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                    <PortStack />
                </div>

            </HashRouter>
        );
    }
}