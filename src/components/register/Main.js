import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from "react";

import Signin from './signin';
import RegPg1 from './RegPg1';
import RegPg2 from './RegPg2';
import RegPg3 from './RegPg3';
import RegPg4 from './RegPg4';
import RegPg5 from './RegPg5';
function Main() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    return (
        <div className="main">
            <>

                <Router>
                    <Switch>
                        <Route path='/' exact >
                            {isAuthenticated ? <Signin /> : <Redirect to="/signin" />}
                        </Route>
                        <Route path='/signin' exact >
                            {isAuthenticated ? <Signin /> : <Redirect to="/signin" />}
                        </Route>
                        <Route path='/RegPg1' exact >
                            {isAuthenticated ? <RegPg1 /> : <Redirect to="/RegPg1" />}
                        </Route>
                        <Route path='/RegPg2' exact >
                            {isAuthenticated ? <RegPg2 /> : <Redirect to="/RegPg2" />}
                        </Route>
                        <Route path='/RegPg3' exact >
                            {isAuthenticated ? <RegPg3 /> : <Redirect to="/RegPg3" />}
                        </Route>
                        <Route path='/RegPg4' exact >
                            {isAuthenticated ? <RegPg4 /> : <Redirect to="/RegPg4" />}
                        </Route>
                        <Route path='/RegPg5' exact >
                            {isAuthenticated ? <RegPg5 /> : <Redirect to="/RegPg5" />}
                        </Route>
                    </Switch>
                </Router>
            </>
        </div>
    )
}

export default Main
