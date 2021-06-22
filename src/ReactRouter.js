import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Signuppage from './Signuppage';
import Otplogin from './Otplogin'

const ReactRouter = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/Signuppage" component={Signuppage} />
                <Route path="/Otplogin" component={Otplogin}></Route>
            </Switch>

        </div>
    </Router>
)


export default ReactRouter
