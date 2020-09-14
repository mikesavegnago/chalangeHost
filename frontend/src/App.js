import './App.css';

import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import Home from './app/components/Home';
import Main from './app/Main';
import React from 'react';

function App() {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Main>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Main>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
