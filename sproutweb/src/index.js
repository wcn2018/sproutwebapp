import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MothershipMaster from './MothershipMaster'
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'
//execute the reactrouter before rendering anything.

const routing = (
    <Router>
        <div>
            <Route path = "/" component = {App} />
            <Route path = "/mothership" component = {MothershipMaster} />
            {/* Further routing within mothership (mothership/plants,
                mothership/binselections, etc., will be done using
                MothershipRenderer in MothershipMaster */}
            {/* MothershipRenderer selects which page component
            is currently needed */}
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
