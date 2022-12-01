import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Character from '../pages/Character';
import Characters from '../pages/Characters';
import CreateChar from '../pages/CreateChar';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/home" exact component={Dashboard} />
        <Route path="/character/:id" component={Character} />
        <Route path="/characters" exact component={Characters} />
        <Route path="/createChar" exact component={CreateChar} />
    </Switch>
);

export default Routes;
