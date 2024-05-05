import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom'
import Bio from './Bio'
/* import Contact from './Contact' */

export default function About() {
    const { path, url } = useRouteMatch()
    return (
        <div>
            <Router>
                <h1>About page</h1>
                <p>Information about your app or who you are would go here.</p>
                &nbsp;
                <Link to={`${url}/bio`}>Bio</Link>
                <hr />
                <Switch>
                <Route path={`${path}/bio`} component={Bio}>
                </Route>
                </Switch>
            </Router>
        </div>
    )
}
