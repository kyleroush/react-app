import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import MyComponent from './rest/MyComponent';
import NotFound from './rest/NotFound';
import Search from './rest/Search';
import Login from './rest/Login';
import Notifications from './rest/Notifications';
import Home from './rest/Home';
import RouteGroup from './rest/group/RouteGroup';
import RouteEmoji from './rest/emoji/RouteEmoji';

const MyRoutes = ({ match }) => {
  console.log(match)
  console.log(match.url)
  return(
  <Router>
  <div>
    <MyComponent />
    <Switch>
      <Route path={match.url+"/search"} component={Search} />
      <Route path={match.url+"/login"} component={Login} />
      <Route path={match.url+"/group"} component={RouteGroup} />
      <Route path={match.url+"/emoji"} component={RouteEmoji} />
      <Route path={match.url+"/notifications"} component={Notifications} />
      <Route exact path={match.url} component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
</Router>
  )
}

const BasicExample = () => (
  <Router>
    <Switch>
      <Route path="/react-app" component={MyRoutes} />
      <Route component={MyRoutes} />
    </Switch>
  </Router>
)
export default BasicExample