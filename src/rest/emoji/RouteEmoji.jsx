import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import NotFound from '../NotFound';
import NewEmoji from './NewEmoji';
import SingleEmoji from './SingleEmoji';
import UpdateEmoji from './UpdateEmoji';

const RouteEmoji = ({ match }) => {
  return(
    <Router>
        <Switch>
            <Route path={match.url+"/new"} component={NewEmoji} />
            <Route path={match.url+"/:id/update"} component={UpdateEmoji} />
            <Route path={match.url+"/:id"} component={SingleEmoji} />
            <Route component={NotFound} />
        </Switch>
    </Router>
  )
}
export default RouteEmoji