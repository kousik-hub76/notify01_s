import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from "react";

import Home from './Home';
import Dept1 from './Dept1';
import Sec1 from './Sec1';
import NoticeType1 from './NoticeType1';
import NoticeView from './NoticeView';

function HomeMain() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    return (
        <div className="main">
            <>

                <Router>
                    <Switch>
                        <Route path='/' exact >
                            {isAuthenticated ? <Home /> : <Redirect to="/Home" />}
                        </Route>
                        <Route path='/Dept1' exact >
                            {isAuthenticated ? <Dept1 /> : <Redirect to="/Dept1" />}
                        </Route>
                        <Route path='/Sec1' exact >
                            {isAuthenticated ? <Sec1 /> : <Redirect to="/Sec1" />}
                        </Route>
                        <Route path='/NoticeType1' exact >
                            {isAuthenticated ? <NoticeType1 /> : <Redirect to="/NoticeType1" />}
                        </Route>
                        <Route path='/NoticeView' exact >
                            {isAuthenticated ? <NoticeView /> : <Redirect to="/NoticeView" />}
                        </Route>

                    </Switch>
                </Router>
            </>
        </div>
    )
}

export default HomeMain
