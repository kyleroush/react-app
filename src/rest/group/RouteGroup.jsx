import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import NotFound from '../NotFound';
import UpdateGroup from './UpdateGroup';
import SingleGroup from './SingleGroup';
import NewGroup from './NewGroup';

const RouteGroup = ({ match }) => {
  return(
    <Router>
        <Switch>
            <Route path={match.url+"/new"} component={NewGroup} />
            <Route path={match.url+"/:id/update"} component={UpdateGroup} />
            <Route path={match.url+"/:id"} component={SingleGroup} />
            <Route component={NotFound} />
        </Switch>
    </Router>
  )
}
export default RouteGroup