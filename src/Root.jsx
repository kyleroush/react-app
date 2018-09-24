import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import MyComponent from './rest/MyComponent';
import NotFound from './rest/NotFound';
import ListGroup from './rest/group/ListGroup';
import Search from './rest/Search';
import Login from './rest/Login';
import Notifications from './rest/Notifications';
import Home from './rest/Home';
import NewEmoji from './rest/emoji/NewEmoji';
import NewGroup from './rest/group/NewGroup';

const BasicExample = () => (
  <Router>
    <div>
      <MyComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/login" component={Login} />
        <Route path="/group/new" component={NewGroup} />
        <Route path="/emoji/new" component={NewEmoji} />
        <Route path="/notifications" component={Notifications} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)
export default BasicExample